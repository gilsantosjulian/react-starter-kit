import React, { ReactElement, } from 'react'
import Description from 'atoms/Description'
import ServiceCard from 'molecules/ServiceCard'
import Title from 'atoms/Title'

import * as styles from 'assets/styles/organisms/services.scss'

const Services: React.SFC<ServicesProps> = (
  {
    title,
    subtitle,
    services,
  }
): ReactElement => {
  const ID = 'Service Section'
  const servicesItems = services.map(
    (
      service
    ): any => (
      <ServiceCard
        key={service.id}
        title={service.name}
        species={service.species}
        status={service.status}
        image={service.image}
      />
    ),
  )

  return (
    <section id={ID} className={styles.section}>
      <Title text={title} />
      <Description text={subtitle} />
      <div className={styles.row}>{servicesItems}</div>
    </section>
  )
}
interface ServicesProps {
  title: string;
  subtitle?: string;
  services: any[];
}

export default Services
