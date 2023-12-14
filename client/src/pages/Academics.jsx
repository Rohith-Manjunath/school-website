import AcademicHero from "../components/Academics/AcademicHero";
import AcademicSchedule from "../components/Academics/AcademicSchedule";
import OurPrograms from "../components/Academics/OurPrograms";
import PersonalThoughts from "../components/Academics/PersonalThoughts";

const Academics = () => {
  return (
    <div>
      <AcademicHero />
      <PersonalThoughts />
      <OurPrograms />
      <AcademicSchedule />
    </div>
  );
};

export default Academics;
