import accessoriesImg from '../assets/images/accesories.jpg'
import chandelorsImg from '../assets/images/chandelors.jpg'
import surgeImg from '../assets/images/surge protector.jpg'
import securityCamImg from '../assets/images/security camera.jpg'
import solarPanelImg from '../assets/images/solar panel.jpg'
import securityFenceImg from '../assets/images/security fence.jpg'
import cablesImg from '../assets/images/cables.jpeg'
import ledImg from '../assets/images/LED.jpg'
import coppertapeImg from '../assets/images/coppertape.jpg'
import arresterImg from '../assets/images/arrester.jpg'
import dvrImg from '../assets/images/Dvr.jpg'
import camera2Img from '../assets/images/camera2.jpg'
import solarImg from '../assets/images/solar.jpg'
import installationImg from '../assets/images/installation.jpg'
import fense2Img from '../assets/images/fense2.jpg'
import fense3Img from '../assets/images/fense3.jpg'
import floodlightImg from '../assets/images/floodlight.jpg'
import switchesImg from '../assets/images/switches.png'

export const products = [
  {
    slug: 'electrical-accessories',
    title: 'Electrical Cables & Accessories',
    shortDesc: 'High-quality cables, sockets, and switches for all needs.',
    cardImage: accessoriesImg,
    lead: 'Premium electrical cables, sockets, switches, and accessories for safe and reliable electrical installations in homes and businesses.',
    gallery: [accessoriesImg, cablesImg, switchesImg],
    systemsTitle: 'Products Available',
    systems: [
      { name: 'Electrical Cables', desc: 'Single-core, multi-core, armoured cables for all load ratings and applications.' },
      { name: 'Sockets & Switches', desc: 'Standard and decorative sockets and switches in various finishes for modern interiors.' },
      { name: 'Circuit Breakers', desc: 'MCBs, RCCBs, and distribution boards for complete electrical protection.' },
      { name: 'Conduits & Accessories', desc: 'PVC and metal conduits, junction boxes, and cable trays for neat installations.' },
      { name: 'Wiring Accessories', desc: 'Cable ties, connectors, terminal blocks, and wire labels for professional finishes.' },
    ],
    whyTitle: 'Why Choose Quality Electrical Accessories?',
    whyText: 'Using certified, high-quality electrical accessories is critical for safety and long-term reliability. At Power Wave, we source only the best products that meet international standards. Our range covers residential, commercial, and industrial needs. Our expert team will help you select the right components for your specific project requirements.',
    features: [
      { icon: 'fa-solid fa-shield-halved', title: 'Safety Certified', desc: 'All products meet international safety and quality standards.' },
      { icon: 'fa-solid fa-bolt', title: 'Reliable Performance', desc: 'Engineered for consistent, long-lasting electrical performance.' },
      { icon: 'fa-solid fa-palette', title: 'Modern Designs', desc: 'Contemporary finishes to complement any interior style.' },
      { icon: 'fa-solid fa-tags', title: 'Competitive Pricing', desc: 'Best value without compromising on quality or safety.' },
    ],
    ctaTitle: 'Power Your Space Right',
    ctaText: 'Get expert advice and the best electrical accessories for your home or business.',
    ctaBtn: 'Get a Quote',
  },
  {
    slug: 'lighting-solutions',
    title: 'Lighting Solutions',
    shortDesc: 'LEDs, floodlights, chandeliers, and more for every space.',
    cardImage: chandelorsImg,
    lead: 'Energy-efficient LED lights, floodlights, chandeliers, and decorative lighting solutions for every residential and commercial application.',
    gallery: [chandelorsImg, ledImg, floodlightImg],
    systemsTitle: 'Lighting Products',
    systems: [
      { name: 'LED Bulbs & Tubes', desc: 'Energy-saving LED bulbs and tubes in various wattages and colour temperatures.' },
      { name: 'Floodlights', desc: 'Powerful LED floodlights for outdoor areas, security lighting, and sports facilities.' },
      { name: 'Chandeliers & Pendants', desc: 'Elegant decorative chandeliers and pendant lights for homes and offices.' },
      { name: 'Panel & Downlights', desc: 'Slim LED panels and downlights for modern ceilings and commercial spaces.' },
      { name: 'Street & Garden Lights', desc: 'Solar-powered and mains street lights for driveways and pathways.' },
    ],
    whyTitle: 'Why Upgrade to LED Lighting?',
    whyText: 'LED lighting uses up to 80% less energy than traditional bulbs and lasts up to 25 times longer. Power Wave offers a comprehensive range of lighting solutions that combine aesthetics with efficiency. From cozy residential interiors to bright commercial warehouses, we have the perfect lighting for every need. Our team can design and install a complete lighting scheme for your property.',
    features: [
      { icon: 'fa-solid fa-leaf', title: 'Energy Efficient', desc: 'Up to 80% less energy consumption compared to traditional lighting.' },
      { icon: 'fa-solid fa-clock', title: 'Long Lifespan', desc: 'LED lights last up to 25 times longer, reducing replacement costs.' },
      { icon: 'fa-solid fa-sun', title: 'Bright & Clear', desc: 'Superior light quality with various colour temperatures available.' },
      { icon: 'fa-solid fa-dollar-sign', title: 'Cost Savings', desc: 'Significant reduction in monthly electricity bills.' },
    ],
    ctaTitle: 'Light Up Your World',
    ctaText: 'Transform your space with our modern, energy-efficient lighting solutions.',
    ctaBtn: 'Get a Lighting Quote',
  },
  {
    slug: 'surge-protection',
    title: 'Surge Protection',
    shortDesc: 'Copper tape, surge protectors, and arrestors for safety.',
    cardImage: surgeImg,
    lead: 'Comprehensive surge protection solutions including copper tape, surge protectors, lightning arrestors, and earthing systems to keep your equipment safe.',
    gallery: [surgeImg, coppertapeImg, arresterImg],
    systemsTitle: 'Protection Products',
    systems: [
      { name: 'Surge Protectors', desc: 'Multi-port surge protectors for computers, appliances, and sensitive electronics.' },
      { name: 'Lightning Arrestors', desc: 'Professional lightning arrestors for buildings and electrical systems.' },
      { name: 'Copper Earth Tape', desc: 'High-conductivity copper tape for effective earthing and grounding systems.' },
      { name: 'Earthing Rods & Compounds', desc: 'Complete earthing solutions including rods, clamps, and conductive compounds.' },
      { name: 'UPS Systems', desc: 'Uninterruptible power supply systems for critical equipment protection.' },
    ],
    whyTitle: 'Why Surge Protection Matters',
    whyText: "Electrical surges from lightning strikes, power grid fluctuations, or equipment switching can destroy expensive appliances and electronics in an instant. Power Wave's surge protection solutions safeguard your investment with certified, high-performance devices. Our professional team will assess your property's needs and install a complete protection system that meets all safety standards.",
    features: [
      { icon: 'fa-solid fa-shield-halved', title: 'Equipment Protection', desc: 'Prevent costly damage to electronics and appliances from power surges.' },
      { icon: 'fa-solid fa-bolt', title: 'Lightning Safe', desc: 'Certified protection against lightning-induced electrical surges.' },
      { icon: 'fa-solid fa-certificate', title: 'Standards Compliant', desc: 'All products meet IEC and national electrical safety standards.' },
      { icon: 'fa-solid fa-wrench', title: 'Expert Installation', desc: 'Professional earthing and protection system installation.' },
    ],
    ctaTitle: 'Protect Your Investment',
    ctaText: "Don't let power surges damage your equipment. Get professional surge protection today.",
    ctaBtn: 'Request Protection Assessment',
  },
  {
    slug: 'security-systems',
    title: 'Security Systems',
    shortDesc: 'Surveillance cameras and systems for peace of mind.',
    cardImage: securityCamImg,
    lead: 'Complete security surveillance solutions including CCTV cameras, DVR/NVR systems, and remote monitoring for homes and businesses.',
    gallery: [securityCamImg, dvrImg, camera2Img],
    systemsTitle: 'Security Solutions',
    systems: [
      { name: 'CCTV Cameras', desc: 'HD and 4K CCTV cameras for indoor and outdoor surveillance.' },
      { name: 'DVR/NVR Systems', desc: 'Digital video recorders and network video recorders for continuous recording and playback.' },
      { name: 'IP Camera Systems', desc: 'Network-based IP cameras with remote viewing via smartphone apps.' },
      { name: 'Night Vision Cameras', desc: 'Infrared cameras for clear footage in complete darkness.' },
      { name: 'Access Control', desc: 'Door access control systems with keypads, card readers, and biometric options.' },
    ],
    whyTitle: 'Why Invest in Security Cameras?',
    whyText: 'Modern security cameras are a powerful deterrent against theft, vandalism, and unauthorized access. With Power Wave, you get professionally installed HD surveillance systems with remote monitoring capabilities. View your property live from anywhere in the world on your smartphone. Our systems come with comprehensive warranties and ongoing technical support.',
    features: [
      { icon: 'fa-solid fa-eye', title: 'Crystal Clear HD', desc: 'High-definition cameras for sharp, detailed footage day and night.' },
      { icon: 'fa-solid fa-mobile-screen', title: 'Remote Monitoring', desc: 'View live feeds from anywhere via smartphone or computer.' },
      { icon: 'fa-solid fa-moon', title: 'Night Vision', desc: 'Infrared technology for clear surveillance in total darkness.' },
      { icon: 'fa-solid fa-hard-drive', title: 'Secure Storage', desc: 'Reliable recording with local and cloud storage options.' },
    ],
    ctaTitle: 'Secure Your Property Today',
    ctaText: 'Get a professional security camera system installed by our certified technicians.',
    ctaBtn: 'Request Security Quote',
  },
  {
    slug: 'solar-solutions',
    title: 'Solar Solutions',
    shortDesc: 'Solar panels, batteries, and inverters for clean energy.',
    cardImage: solarPanelImg,
    lead: 'Solar panels, batteries, inverters, and full off-grid and hybrid systems for sustainable energy independence in Uganda.',
    gallery: [solarPanelImg, solarImg, installationImg],
    systemsTitle: 'Systems & Services',
    systems: [
      { name: 'Grid-Tied Systems', desc: 'Connect to the national grid and reduce your electricity bills while contributing clean energy.' },
      { name: 'Off-Grid Systems', desc: 'Completely independent solar systems with battery storage for areas without reliable grid access.' },
      { name: 'Hybrid Systems', desc: 'Combine grid and battery storage for maximum efficiency and reliability.' },
      { name: 'Battery Storage', desc: 'Premium lithium and lead-acid battery options for energy storage.' },
      { name: 'Professional Services', desc: 'Site assessment, design, installation, and maintenance by certified technicians.' },
    ],
    whyTitle: 'Why Invest in Solar Energy?',
    whyText: "Solar energy is the future of sustainable power in Uganda. With Power Wave's solar solutions, you can significantly reduce your electricity costs, increase your property value, and contribute to environmental conservation. Our expert team will assess your energy needs and design a system perfectly suited to your home or business. We use only certified, high-quality components and provide comprehensive warranties and after-sales support.",
    features: [
      { icon: 'fa-solid fa-leaf', title: 'Eco-Friendly', desc: 'Reduce your carbon footprint and contribute to a cleaner environment.' },
      { icon: 'fa-solid fa-money-bill', title: 'Cost Savings', desc: 'Dramatically reduce your energy bills and ROI within 3-5 years.' },
      { icon: 'fa-solid fa-shield-halved', title: 'Reliable Power', desc: '24/7 energy availability with battery backup systems.' },
      { icon: 'fa-solid fa-certificate', title: 'Certified Quality', desc: 'All systems meet international standards with comprehensive warranties.' },
    ],
    ctaTitle: 'Go Solar with Power Wave',
    ctaText: 'Transform your energy consumption and start saving today with our professional solar solutions.',
    ctaBtn: 'Request a Solar Quote',
  },
  {
    slug: 'security-fences',
    title: 'Security Fences & Accessories',
    shortDesc: 'Security fences and a wide range of electrical accessories.',
    cardImage: securityFenceImg,
    lead: 'Professional electric security fencing and perimeter protection systems to secure your property with maximum effectiveness.',
    gallery: [securityFenceImg, fense2Img, fense3Img],
    systemsTitle: 'Fencing Solutions',
    systems: [
      { name: 'Electric Security Fences', desc: 'High-voltage electric fencing systems that deter and detect intruders.' },
      { name: 'Barbed Wire Fencing', desc: 'Heavy-duty galvanised barbed wire for perimeter security.' },
      { name: 'Razor Wire', desc: 'Concertina razor wire for maximum perimeter deterrence.' },
      { name: 'Fence Energizers', desc: 'Powerful electric fence energizers with alarm and monitoring capabilities.' },
      { name: 'Gates & Access', desc: 'Electric gate motors, intercoms, and access control integration.' },
    ],
    whyTitle: 'Why Electric Security Fencing?',
    whyText: 'Electric security fencing is one of the most effective perimeter protection systems available. It provides an immediate, non-lethal deterrent that alerts property owners to intrusion attempts. Power Wave installs professionally certified electric fence systems for residential estates, commercial properties, industrial sites, and farms. All installations comply with national safety regulations and come with full warranties.',
    features: [
      { icon: 'fa-solid fa-shield-halved', title: 'Maximum Deterrence', desc: 'Proven to deter up to 95% of would-be intruders.' },
      { icon: 'fa-solid fa-bell', title: 'Instant Alerts', desc: 'Alarm system triggers immediately on fence tamper or intrusion.' },
      { icon: 'fa-solid fa-plug', title: 'Power Efficient', desc: 'Low power consumption with solar backup options available.' },
      { icon: 'fa-solid fa-certificate', title: 'Safety Certified', desc: 'All installations meet national electrical safety regulations.' },
    ],
    ctaTitle: 'Secure Your Perimeter',
    ctaText: 'Get a professional security fence installation from our certified team.',
    ctaBtn: 'Request Fencing Quote',
  },
]
