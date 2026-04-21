import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Home, MapPin, Building, IndianRupee, Percent, Square } from "lucide-react";

const sampleProperties = [
  {
    id: 1,
    name: "DLF Elite Residences",
    developer: "DLF Ltd",
    location: "Sector 54, Gurgaon",
    price: 9500000,
    originalPrice: 12000000,
    area: "1800 sq.ft",
    bhk: "3 BHK",
    type: "Apartment",
    status: "Ready to Move",
    possession: "Immediate",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Security"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Godrej Grand Estate",
    developer: "Godrej Properties",
    location: "Sector 150, Noida",
    price: 7200000,
    originalPrice: 9000000,
    area: "1650 sq.ft",
    bhk: "3 BHK",
    type: "Apartment",
    status: "Under Construction",
    possession: "Dec 2025",
    amenities: ["Swimming Pool", "Gym", "Park", "Security"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "M3M Forestia",
    developer: "M3M India",
    location: "Sector 107, Noida",
    price: 8500000,
    originalPrice: 11000000,
    area: "1750 sq.ft",
    bhk: "3 BHK",
    type: "Apartment",
    status: "Under Construction",
    possession: "Jun 2025",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Sports Complex"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539ee?w=800&auto=format&fit=crop",
  },
];

export default function ComparePage() {
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [compareMode, setCompareMode] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const togglePropertySelection = (property) => {
    if (selectedProperties.find(p => p.id === property.id)) {
      setSelectedProperties(selectedProperties.filter(p => p.id !== property.id));
    } else if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
    }
  };

  const removeProperty = (propertyId) => {
    setSelectedProperties(selectedProperties.filter(p => p.id !== propertyId));
  };

  const startCompare = () => {
    if (selectedProperties.length >= 2) {
      setCompareMode(true);
    }
  };

  if (compareMode && selectedProperties.length >= 2) {
    return (
      <main className="pt-20 min-h-screen bg-muted">
        <div className="bg-primary text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Property Comparison</h1>
                <p className="text-white/80">Compare {selectedProperties.length} properties side by side</p>
              </div>
              <button
                onClick={() => setCompareMode(false)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                Back to Selection
              </button>
            </div>
          </div>
        </div>

        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg border border-border">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-text">Feature</th>
                    {selectedProperties.map(property => (
                      <th key={property.id} className="text-left p-4">
                        <div className="space-y-2">
                          <img src={property.image} alt={property.name} className="w-full h-32 object-cover rounded-lg" />
                          <h3 className="font-semibold text-text">{property.name}</h3>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Developer</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4 text-text-muted">{property.developer}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Location</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4 text-text-muted">{property.location}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Price</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4">
                        <div className="space-y-1">
                          <p className="font-semibold text-primary">{formatCurrency(property.price)}</p>
                          {property.originalPrice > property.price && (
                            <p className="text-sm text-green-600">
                              Save {formatCurrency(property.originalPrice - property.price)}
                            </p>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Price per sq.ft</td>
                    {selectedProperties.map(property => {
                      const area = parseInt(property.area.replace(/[^0-9]/g, ''));
                      const pricePerSqft = property.price / area;
                      return (
                        <td key={property.id} className="p-4 text-text-muted">
                          {formatCurrency(pricePerSqft)}/sq.ft
                        </td>
                      );
                    })}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Area</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4 text-text-muted">{property.area}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Configuration</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4 text-text-muted">{property.bhk}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Status</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          property.status === 'Ready to Move' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {property.status}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-medium text-text">Possession</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4 text-text-muted">{property.possession}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-text">Key Amenities</td>
                    {selectedProperties.map(property => (
                      <td key={property.id} className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {property.amenities.slice(0, 3).map((amenity, i) => (
                            <span key={i} className="px-2 py-1 bg-muted text-xs rounded">
                              {amenity}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 min-h-screen bg-muted">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Compare Properties</h1>
            <p className="text-white/80 max-w-2xl text-lg">Select up to 3 properties to compare their features, prices, and amenities side by side</p>
          </motion.div>
        </div>
      </div>

      {selectedProperties.length >= 2 && (
        <div className="sticky top-20 z-40 bg-white border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-text-muted">
                  {selectedProperties.length} properties selected
                </span>
                <div className="flex -space-x-2">
                  {selectedProperties.map(property => (
                    <div key={property.id} className="relative group">
                      <img 
                        src={property.image} 
                        alt={property.name}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                      <button
                        onClick={() => removeProperty(property.id)}
                        className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={startCompare}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
              >
                <ArrowUpDown className="w-4 h-4" />
                Compare Now
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProperties.map((property, i) => {
              const isSelected = selectedProperties.find(p => p.id === property.id);
              const isDisabled = !isSelected && selectedProperties.length >= 3;

              return (
                <motion.div 
                  key={property.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
                    isSelected ? 'border-primary shadow-lg' : 'border-border hover:shadow-md'
                  } ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  onClick={() => !isDisabled && togglePropertySelection(property)}
                >
                  <div className="relative">
                    <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                        ✓
                      </div>
                    )}
                    {isDisabled && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-sm">Max 3 properties</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-text mb-2">{property.name}</h3>
                    <p className="text-sm text-text-muted mb-1">{property.developer}</p>
                    <div className="flex items-center gap-1 text-sm text-text-muted mb-3">
                      <MapPin className="w-3 h-3" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-lg font-bold text-primary">{formatCurrency(property.price)}</p>
                        {property.originalPrice > property.price && (
                          <p className="text-sm text-green-600">
                            Save {formatCurrency(property.originalPrice - property.price)}
                          </p>
                        )}
                      </div>
                      <div className="text-right text-sm text-text-muted">
                        <p>{property.area}</p>
                        <p>{property.bhk}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        property.status === 'Ready to Move' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {property.status}
                      </span>
                      <span className="text-xs text-text-muted">
                        Possession: {property.possession}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
