import Image from "next/image";

export default function Card(){
    const links = [
        {title:"React Portfolio", url:"https://github.com/juliet-karpah/react-portfolio", logo:"/github-logo.svg"},
        {title: "LinkedIn Profile", url:"https://www.linkedin.com/in/juliet-g-864950b8/", logo:"/linkedin-logo.svg"}
    ]
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6">
      <h5 className="mb-3 text-base font-semibold text-gray-600 md:text-xl">
        Software Engineer
      </h5>
      <ul className="my-4 space-y-3 decoration-none">
        {links.map((link,i) => (
        <li key={i} className="border-2 hover:shadow-md border-gray-200">
        <a
          href={link.url}
          target="_blank"
          className="flex items-center p-3 text-base text-gray-600 rounded-lg"
        >
        <Image width="24" height="24" src={link.logo} className="logo-img" />
          <span className="flex-1 ml-3 whitespace-nowrap">{link.title}</span>
        </a>
      </li>
        ))}

      </ul>
    </div>
  );
};
