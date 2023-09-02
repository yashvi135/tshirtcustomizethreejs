import React, { useState } from 'react';
import Modal from 'react-modal'; 
import DesignTshirt from './DesignTshirt';
import ColorPicker from './ColorPicker';
import "../styles/Navbar.css"
import Logo from './Logo';
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderTabContent = () => {
    if (activeTab === 'design') {
      return <DesignTshirt />;
    } else if (activeTab === 'color') {
      return <ColorPicker />;
    } else if (activeTab === 'logo') {
      return <Logo file={file} setFile={setFile} />;
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

