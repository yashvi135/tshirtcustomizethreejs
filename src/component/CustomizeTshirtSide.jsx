import React, { useState } from 'react';
import DesignTshirt from './DesignTshirt';
import ColorPicker from './ColorPicker';
import state from '../store';
import "../styles/Navbar.css"
import Logo from './Logo';
import CustomizerText from './CustomizerText';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import FooterMenuOptions from './FooterMenuOptions';
import Footer from './Footer';

const CustomizeTshirtSide = () => {
  const [activeTab, setActiveTab] = useState('design'); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState('');
  

  const openModal = (tab) => {
    setActiveTab(tab); // Set the active tab when opening the modal
    setIsModalOpen(true);
  };
  

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: false,
    stylishShirt: true,
  })
  
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

  // Update the state based on the 'type'
  if (type === 'logo') {
    state.isLogoTexture = true;
    state.isFullTexture = false;
    state.logoDecal = result;
  } else if (type === 'full') {
    state.isLogoTexture = false;
    state.isFullTexture = true;
    state.fullDecal = result;
  }

  if (!activeFilterTab[decalType.filterTab]) {
    handleActiveFilterTab(decalType.filterTab);
  }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file, type) // Pass the 'type' parameter to the 'reader' function
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      });
  }
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const setTextOnTshirt = (text) => {
    // Update the state with the text input
    state.textOnTshirt = text;
  };
  const renderTabContent = () => {
    if (activeTab === 'design') {
      return <DesignTshirt />;
    } else if (activeTab === 'color') {
      return <ColorPicker />;
    } else if (activeTab === 'logo') {
      return <Logo file={file} setFile={setFile}  readFile={readFile}/>;
    } else if(activeTab==='text'){
      return <CustomizerText/>
    }
    return null;
  };

  return (
    <div className='customizetshirttabs'>
      <div className="design_tabs flex">
        <button
          className={`tabbtn ${activeTab === 'design' ? 'active' : ''}`}
          onClick={() => openModal('design')} // Set active tab to 'design'
        >
          Design
        </button>
        <button
          className={`ml-5 tabbtn ${activeTab === 'color' ? 'active' : ''}`}
          onClick={() => openModal('color')} // Open modal for color tab
        >
          Color
        </button>
        <button
          className={`ml-5 tabbtn ${activeTab === 'logo' ? 'active' : ''}`}
          onClick={() => openModal('logo')} // Open modal for logo tab
        >
          Logo
        </button>
        <button
          className={`ml-5 tabbtn ${activeTab === 'text' ? 'active' : ''}`}
          onClick={() => openModal('text')} // Open modal for logo tab
        >
          Text
        </button>
      </div>

      {/* Render the tab content */}
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <FooterMenuOptions/>
      <Footer/>
    </div>
  );
};

export default CustomizeTshirtSide;

