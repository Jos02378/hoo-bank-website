import logo from '../assets/logo.svg';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className='flex-center padding-y flex-col'>
    <div className='flex-start flex-col mb-8 w-full md:flex-row'>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img
          src={logo}
          alt='logo'
          className='w-[266px] h-[72px] object-contain'
        />
        <p className='paragraph mt-4 max-w-[310px]'>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className='flex flex-col my-4 min-w-[150px] ss:my-0'
          >
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  } hover:text-secondary`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center flex-col py-6 border-t-[1px] border-t-[#3F3E45] md:flex-row'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </p>

      <div className='flex flex-row mt-6 md:mt-0'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-21px] object-contain cursor-pointer ${
              index !== socialMedia.length ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
