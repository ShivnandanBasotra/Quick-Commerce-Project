const TotalStatCard = ({ title, value, icon: Icon }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
      <div className="mr-4">
        <Icon size={24} className="text-green-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-green-600">{value}</p>
      </div>
    </div>
  );

  export default TotalStatCard;