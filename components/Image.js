import NextImage from 'next/image'
const Image = ({ ...rest }) => <NextImage {...rest} />
export default Image

// alt="Image preview"
//                       src={image}
//                       className="md:h-72% lg:h-100% object-cover object-center"
//                       width={300}
//                       height={306}
//                       key={index}
