import React, { ReactElement, SFC, } from 'react';
import Description from 'atoms/Description';
import Img from 'atoms/Img';
import Link from 'atoms/Link';
import * as styles from 'assets/styles/molecules/serviceCard.scss';
import Paragraph from './Paragraph';

const ServiceCard: SFC<ServiceCardProps> = (
  {
    title,
    species,
    status,
    image,
  }
): ReactElement => (
  <div className={styles.card}>
    <Img src={image} alt={`image of ${title}`} />
    <Paragraph title={title} description={species} />
    <Description text={status} />
    <Link href={image} title="Read more" />
  </div>
);

interface ServiceCardProps {
  title: string;
  species: string;
  status: string;
  image: string;
}

export default ServiceCard;
