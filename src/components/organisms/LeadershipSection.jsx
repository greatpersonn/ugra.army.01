import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../db/firebaseConnection";

import LeaderCard from "../molecules/LeaderCard";

import "./LeadershipSection.scss";

export default function LeadershipSection() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "leadership"), orderBy("order"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLeaders(data);
    });

    return () => unsub();
  }, []);

  const grouped = leaders.reduce((acc, leader) => {
    if (!acc[leader.group]) acc[leader.group] = [];
    acc[leader.group].push(leader);
    return acc;
  }, {});

  const groupOrder = [
    "Головнокомандувач",
    "Полковники",
    "Десантно-штурмові війська",
    "Сили спеціальних операцій",
    "Головне управління розвідки",
    "Військова служба правопорядку"
  ];

  return (
    <section className="leadership">
      <span>Керівництво Збройних Сил України</span>
      {groupOrder.map((group, idx) => (
        <div key={idx} className="leader-group">
          <span className="leader-title">{group}</span>
          <div className="grid">
            {grouped[group] && grouped[group].length > 0 ? (
              grouped[group].map((leader, i) => (
                <LeaderCard
                  key={leader.id}
                  {...leader}
                  avatar={require(`../../assets/images/${leader.avatar}`)}
                />
              ))
            ) : (
              <div className="undef-container">
                <span>Інформація засекречена</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
