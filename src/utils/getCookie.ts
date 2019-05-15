export default (
  name
): string => {
  const cookies = document.cookie;
  const cookiesSplitted: string[] = cookies.split(
    ';'
  );

  const cookieMatched = cookiesSplitted
    .filter(
      (
        cookie
      ): boolean => cookie.split(
        '='
      ).shift() === name
    )
    .pop();

  return cookieMatched && cookieMatched.split(
    '='
  ).pop();
};
