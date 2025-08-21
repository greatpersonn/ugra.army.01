import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../db/firebaseConnection";

import "./LeadershipHistorySection.scss";

const LeadershipHistorySection = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "hist-leaders"), orderBy("order"));
    const unsub = onSnapshot(q, (snapshot) => {
      setLeaders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <section className="leadership-history">
      <span>Історія керівництва</span>
      <span className="description">
        Керівники Збройних Сил України залишили помітний слід в історії нашої армії.
      </span>

      <div className="past-leaders">
        {leaders.map((leader) => (
          <div 
            key={leader.id} 
            className={`leader-card ${leader.status ? "actual" : ""}`}
          >
            <img 
              src={require(`../../assets/images/${leader.avatar}`)} 
              alt={leader.nickname} 
            />
            <div className="nickname">{leader.nickname}</div>
            {leader.awards?.length > 0 && (
              <ul className="awards">
                {leader.awards.map((award, j) => (
                  <li key={j}>{award}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipHistorySection;
