import iot from "@/assets/iot.jpg";
import ai from "@/assets/ai.jpg";
import robotics from "@/assets/robotics.jpg";
import evBms from "@/assets/ev-bms.jpg";
import pcb from "@/assets/hero-pcb.jpg";
import rnd from "@/assets/rnd.jpg";
import iotKit from "@/assets/iot-kit.jpg";
import robotAssistant from "@/assets/robot-assistant.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import college from "@/assets/college.jpg";

export const images = { iot, ai, robotics, evBms, pcb, rnd, iotKit, robotAssistant, manufacturing, college };

export const company = {
  name: "AcenAAr Technologies Private Limited",
  short: "AcenAAr Technologies",
  tagline: "Innovating Today for a Better Tomorrow",
  phone: "8074820261",
  website: "acenaartechnologies.com",
  corporate: "Kurnool, Andhra Pradesh, India",
  branch: "Visakhapatnam, Andhra Pradesh, India",
  vision: "To be the most preferred Global Product Engineering Design House.",
  mission: "Empower Innovation in the Embedded Engineering Domains to Address Real-world Challenges.",
};

export const domains = [
  { key: "iot", name: "IoT", img: iot, desc: "Connected sensor nodes and devices that capture and share real-world data." },
  { key: "embedded", name: "Embedded Engineering", img: pcb, desc: "Microcontroller hardware and firmware at the heart of every product." },
  { key: "ai", name: "AI & ML", img: ai, desc: "Real-time, sensor-based decision applications on hardware." },
  { key: "robotics", name: "Robotics", img: robotics, desc: "Sensing, intelligence, control and mechanics combined into machines." },
  { key: "automation", name: "Smart Automation", img: manufacturing, desc: "Automated, connected environments for Industry 4.0." },
  { key: "ev", name: "EV & BMS", img: evBms, desc: "Battery monitoring, protection and balancing for electric vehicles." },
  { key: "rpa", name: "Autonomous R.P.A.", img: robotAssistant, desc: "Autonomous Robotic Personal Assistant technology." },
];

export const services = [
  { n: "01", title: "Product Engineering", img: rnd, desc: "From concept toward deployable product — design, prototyping, validation and delivery.", tech: ["Hardware design", "Firmware", "Integration"], apps: ["Custom products", "Industry 4.0"] },
  { n: "02", title: "Embedded Systems", img: pcb, desc: "Microcontroller-based hardware and software engineered for real-world control.", tech: ["Arduino", "ESP32", "Raspberry Pi"], apps: ["Controllers", "Smart devices"] },
  { n: "03", title: "IoT Solutions", img: iot, desc: "Sensors, connectivity and data working together as connected systems.", tech: ["Wi-Fi", "Bluetooth", "Sensors"], apps: ["Monitoring", "Smart environments"] },
  { n: "04", title: "AI & ML", img: ai, desc: "Machine learning applied to live sensor data for real-time decisions.", tech: ["AI", "Machine Learning", "Deep Learning"], apps: ["Sensor intelligence", "Decision systems"] },
  { n: "05", title: "Robotics & Smart Automation", img: robotics, desc: "Autonomous and robotic systems with embedded control.", tech: ["Embedded control", "Motors", "Sensors"], apps: ["Autonomous systems", "Automation"] },
  { n: "06", title: "EV & BMS", img: evBms, desc: "Battery management concepts for safe, optimised electric mobility.", tech: ["Cell monitoring", "Protection", "Balancing"], apps: ["EV packs", "Energy storage"] },
];

export type Category = "IoT" | "Embedded" | "AI & ML" | "Robotics" | "EV/BMS";

export const products: {
  slug: string; name: string; category: Category; img: string; short: string;
  features: string[]; applications: string[]; tech: string[]; overview: string;
}[] = [
  {
    slug: "iot-trainer-kit", name: "IoT Trainer Kit", category: "IoT", img: iotKit,
    short: "An all-in-one hands-on platform with sensors, actuators, displays and wireless connectivity.",
    overview: "The IoT Trainer Kit brings together controllers, sensors, actuators and connectivity on a single platform for practical IoT and embedded development.",
    features: ["Ultrasonic, PIR, temperature/humidity, IR, LDR sensors", "Keypad input", "Servo, relay and buzzer actuators", "Display output", "Wi-Fi and Bluetooth"],
    applications: ["IoT prototyping", "Embedded labs", "Smart monitoring experiments"],
    tech: ["Arduino", "ESP32", "Raspberry Pi", "Wi-Fi", "Bluetooth"],
  },
  {
    slug: "ai-ml-iot-trainer-kit", name: "AI & ML IoT Trainer Kit", category: "AI & ML", img: ai,
    short: "AI & ML boards that combine sensing hardware with machine-learning experiments.",
    overview: "Built for real-time sensor-based decision applications, this kit pairs IoT hardware with AI, Machine Learning and Deep Learning workflows.",
    features: ["Sensor-driven data capture", "On-board inference experiments", "Hardware + ML integration"],
    applications: ["Intelligent systems", "Real-time decision applications", "R&D labs"],
    tech: ["AI", "Machine Learning", "Deep Learning", "Sensors"],
  },
  {
    slug: "ev-bms", name: "EV / BMS Technology", category: "EV/BMS", img: evBms,
    short: "Battery management technology for monitoring, protection and balancing.",
    overview: "Battery management concepts covering cell monitoring, protection and balancing toward vehicle integration.",
    features: ["Cell voltage, current and temperature monitoring", "Over/under-voltage and over-current protection", "Short-circuit and thermal protection", "SOC / SOH estimation", "Cell balancing"],
    applications: ["Electric vehicles", "Battery packs", "Energy storage"],
    tech: ["BMS", "Embedded control", "Monitoring"],
  },
  {
    slug: "autonomous-robotic-personal-assistant", name: "Autonomous Robotic Personal Assistant", category: "Robotics", img: robotAssistant,
    short: "An autonomous robotic assistant combining sensing, intelligence, control and mechanics.",
    overview: "The Autonomous R.P.A. brings together embedded control, sensors and intelligence into an autonomous robotic platform.",
    features: ["Autonomous operation", "Sensor-based perception", "Embedded control"],
    applications: ["Assistive robotics", "Connected environments", "R&D"],
    tech: ["Robotics", "AI", "Embedded Systems"],
  },
  {
    slug: "embedded-prototyping-systems", name: "Embedded / IoT Prototyping Systems", category: "Embedded", img: pcb,
    short: "Learning and prototyping systems for embedded and IoT development.",
    overview: "Embedded and IoT systems for prototyping and hands-on engineering across microcontroller platforms.",
    features: ["Microcontroller platforms", "Expandable sensor interfaces", "Prototype-ready design"],
    applications: ["Product prototyping", "Embedded labs", "Institutional programs"],
    tech: ["Arduino", "ESP32", "Raspberry Pi"],
  },
];

export const programs = [
  { group: "CSE / IT / MCA / BCA", items: ["Web Development", "Mobile Application Development", "Data Science", "Cyber Security", "UI/UX Design", "Machine Learning", "Cloud Computing", "DevOps", "Full Stack Java / Python"] },
  { group: "ECE / EEE / ECM / Electronics", items: ["Internet of Things (IoT)", "Arduino Programming", "Embedded Systems Design", "Microprocessor & Microcontroller Systems"] },
  { group: "Mechanical / Civil", items: ["3D Printing", "AutoCAD", "Robotics", "HVAC Drawing"] },
  { group: "Other Programs", items: ["Business Analysis", "Human Resource Management", "Tally with GST", "Digital Marketing", "Computer Fundamentals", "Life Sciences"] },
];
