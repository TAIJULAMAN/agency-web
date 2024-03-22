import PropTypes from "prop-types";


const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="relative w-[330px] h-[490px] bg-[#171721] cursor-pointer rounded-lg  shadow-lg  hover:shadow-[#ffdd00]
    overflow-hidden py-[26px] px-[20px] flex flex-col gap-[14px]
     transition-all duration-300 ease-in-out hover:translate-y-[10px] hover:brightness-110"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <img className="w-full h-[180px] bg-white rounded shadow-lg shadow-[rgba(0, 0, 0, 0.3)]" src={project.image} />
      <div className=" w-full flex items-center flex-wrap gap-2 mt-4">
        {project.tags?.map((tag, index) => (
          <p className="text-sm text-[#854CE6] bg-[#29223F] px-2 py-1 rounded-lg" key={index}>{tag}</p>
        ))} 
      </div>
      <div className="w-full flex flex-col gap-0 pz-[2px]">
        <h1 className='font-bold text-2xl text-[#b1b2b3] overflow-hidden text-ellipsis box-content w-full line-clamp-2'>{project.title}</h1>
        <p className="text-sm ml-1 text-[#b1b2b3]">{project.date}</p>
        <p className="text-md text-[#b1b2b3] overflow-hidden mt-2 box-content w-full line-clamp-3 text-ellipsis">{project.description}</p>
      </div>
      <div className="flex items-center pl-2">
        {project.member?.map((member, index) => (
          <img className="w-10 h-10 rounded-full -ml-2 bg-white shadow-[rgba(0, 0, 0, 0.2)] border-[#FFFFFF]" key={index} src={member.img} />
        ))}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
