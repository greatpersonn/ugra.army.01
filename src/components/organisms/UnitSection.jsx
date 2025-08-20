import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../db/firebaseConnection";

const UnitsSection = () => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "units"), orderBy("order"));
    const unsub = onSnapshot(q, (snapshot) => {
      setUnits(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <>
      <span className="units-header">До складу Збройних сил України входять</span>
      <div className="units-container">
        {units.map((unit) => (
          <div key={unit.id} className="container-info">
            <div className="info-header">
              <img src={require(`../../assets/images/${unit.logo}`)} alt={unit.short} />
              <span>{unit.name}</span>
            </div>
            <div className="info-content">
              {unit.description.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
              <span><strong>Керівник:</strong> {unit.leader}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UnitsSection;