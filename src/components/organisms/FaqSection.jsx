import { useEffect, useState } from "react";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db } from "../../db/firebaseConnection";

import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "faq-question"),
      where("active", "==", true),
      orderBy("order")
    );

    const unsub = onSnapshot(q, (snapshot) => {
        console.log(snapshot);
        
        setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()})));
    });

    return () => unsub();
  }, []);

  return (
    <div className="faq-container">
      <span>Питання та відповіді</span>
      <FaqAccordion items={items} />
    </div>
  );
}

export default FaqSection;
