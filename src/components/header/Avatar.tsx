type Prop = {
  src: string;
  alt: string;
  onClick: () => void;
};

const Avatar: React.FC<Prop> = ({ src, alt, onClick }) => (
  <div className="flex flex-col justify-center items-center gap-1">
    {src ? (
      <img
        id="avatarButton"
        className="w-10 h-10 rounded-full cursor-pointer relative"
        src={src}
        alt={alt}
        onClick={onClick}
        loading="lazy"
      />
    ) : (
      <div
        className="relative w-7 h-7 md:w-10 md:h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
        onClick={onClick}
      >
        <svg
          className="absolute w-8 h-8 md:w-12 md:h-12 text-gray-400 -left-[2px] md:-left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    )}
    <small className="text-[7px] md:text-[8px] uppercase font-semibold hover:scale-110 md:-mb-[2px] duration-100">
      Perfil
    </small>
  </div>
);

type UserProfileProps = {
  data?: { picture?: string };
  toggleDropdown: () => void;
};

export default function UserProfile({
  data,
  toggleDropdown,
}: UserProfileProps) {
  return (
    <Avatar
      src={data?.picture || ""}
      alt="profile user"
      onClick={toggleDropdown}
    />
  );
}
