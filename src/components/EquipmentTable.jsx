import React from 'react';

const equipmentList = [
  { name: 'DOZER', type: 'D6', no: 4 },
  { name: 'DOZER', type: 'D7H', no: 4 },
  { name: 'PAY LOADER', type: '966C', no: 3 },
  { name: 'PAY LOADER', type: '950C', no: 8 },
  { name: 'TOYOTA HILUX', type: 'TRUCK', no: 3 },
  { name: 'MOTOR GRADER', type: '12G', no: 4 },
  { name: 'LOW BED', type: 'MACK', no: 3 },
  { name: 'MOTOR GRADER', type: '14H', no: 3 },
  { name: 'EXCAVATOR', type: '320L', no: 3 },
  { name: 'BACK LOAD LOADER', type: 'JCB', no: 2 },
  { name: 'WATER TANKER', type: 'METZ-DISC', no: 4 },
  { name: 'MACK TRUCK', type: 'METZ-DISC', no: 4 },
  { name: 'TYRE BOILER', type: 'MAIL', no: 3 },
  { name: 'ROAD SWEEPER', type: 'MACK', no: 2 },
  { name: 'TRANSIT MIXER', type: 'DYNAPAC', no: 2 },
  { name: 'ROLLER', type: 'MACK', no: 3 },
  { name: 'TRUCK', type: 'BULL MACK', no: 18 },
  { name: 'ASPHALT ROLLER', type: 'CATERPILLAR', no: 4 },
  { name: 'ASPHALT PAVER', type: 'DYNAPAC', no: 3 },
  { name: 'CRUSHER', type: '', no: 1 },
  { name: 'ASPHALT PLANT', type: 'INDIAN MOON', no: 1 },
];

const EquipmentTable = () => {
  return (
    <section id="equipment" className="bg-gray-50 text-gray-900 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Equipment List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-2 px-4 border">NAME</th>
                <th className="py-2 px-4 border">TYPE</th>
                <th className="py-2 px-4 border">NO</th>
              </tr>
            </thead>
            <tbody>
              {equipmentList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.type}</td>
                  <td className="py-2 px-4 border text-center">{item.no}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EquipmentTable;
