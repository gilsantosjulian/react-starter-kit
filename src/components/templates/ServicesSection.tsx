import React, { ReactElement, } from 'react';
import Description from 'atoms/Description';
import Services from 'organisms/Services';
import ServiceCard from 'molecules/ServiceCard';
import Title from 'atoms/Title';

const result = [
  {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    id: 3,
    name: 'Summer Smith',
    species: 'Human',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

const ServicesSectionTemplate: React.SFC<CenteredTemplateProps> = (
  {
    title,
    subtitle,
  }
): ReactElement => {
  const services = result.map(
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
  );

  return (
    <section id="What we do">
      <div>
        <Title text={title} />
        <Description text={subtitle} />
        <Services services={services} />
      </div>
    </section>
  );
};

interface CenteredTemplateProps {
  title: string;
  subtitle?: string;
}

export default ServicesSectionTemplate;
