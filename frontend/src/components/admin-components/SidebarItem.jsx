const SidebarItem = ({ icon, label, isActive, onClick, isCompact }) => {
  return (
    <div 
      onClick={onClick} 
      className={`hover:bg-green-200 text-lg font-medium flex items-center p-3 cursor-pointer transition-all duration-200 ease-in-out ${
        isActive ? 'text-green-500 font-extrabold' : 'text-gray-500 hover:text-gray-700'
      } ${isCompact ? 'justify-center' : ''}`}
    >
      <span className={`${isCompact ? 'mr-0' : 'mr-3'}`}>{icon}</span>
      {!isCompact && (
        <span className={`flex-grow ${isActive ? 'font-bold' : ''}`}>{label}</span>
      )}
    </div>
  );
};

export default SidebarItem