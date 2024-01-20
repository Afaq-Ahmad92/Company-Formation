import React from 'react'
import "../Styles/Footer.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <div className='Footer'>
      <p className='Location'>
        <LocationOnIcon className="LocationIcon" style={{ color: '#008080' }} />
        Floor 29, Office# 32 - Al Saqr Business Tower, Sheikh Zayed Road, Dubai, United Arab Emirates</p>
      <a className='Styles Email' href={`tel:+971 4 577 7890`}>
        <CallIcon style={{ color: '#2ecc71' }} />
        +971 4 577 7890
      </a>
      <a className='Styles Email' href={`mailto:sales@cofocsp.com`}>
        <EmailIcon style={{ color: '#3498db' }} />
        sales@cofocsp.com
      </a>
      <p className='SocailMedia'>
        <a className='Styles' href={`https://www.facebook.com/companyformationindubai.uae`} target="_blank" rel="noopener noreferrer">
          <FacebookIcon style={{ color: '#1877f2' }} />
        </a>
        <a className='Styles' href={`https://twitter.com/comp_dubai`} target="_blank" rel="noopener noreferrer">
          <XIcon style={{ color: '#888888' }} />
        </a>
        <a className='Styles' href={`https://www.instagram.com/company_formation_dubai/`} target="_blank" rel="noopener noreferrer">
          <InstagramIcon style={{ color: '#bc2a8d' }} />
        </a>
        <a className='Styles' href={`https://www.linkedin.com/company/companyformationindubai/`} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ color: '#0077B5' }} />
        </a>
        <a className='Styles' href={`https://wa.me/+971525676784`} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon style={{ color: '#25d366' }} />
        </a>
        <a className='Styles' href={`https://www.youtube.com/@companyformationindubai`} target="_blank" rel="noopener noreferrer">
          <YouTubeIcon style={{ color: '#FF0000' }} />
        </a>
      </p>
    </div>
  )
}

export default Footer
