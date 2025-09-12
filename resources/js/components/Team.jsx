import React from "react";

export default function Team() {
  const members = [
    { name: "Hani", role: "Web Developer", rating: 5 },
    { name: "Andi", role: "UI Designer", rating: 5 },
    { name: "Rina", role: "Project Manager", rating: 5 },
    { name: "Tiany", role: "Support", rating: 5 },
  ];

  return (
    <section className="py-12 px-12 bg-white">
      <h4 className="text-center font-bold text-xl mb-8">Professional Team</h4>
      <div className="flex justify-center gap-8 flex-wrap">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-[#FEFDEB] rounded-xl shadow p-8 flex flex-col items-center w-60"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-green-500">
              {member.name.charAt(0)}
            </div>
            <h5 className="font-bold mb-1">{member.name}</h5>
            <div className="text-gray-500 mb-2">{member.role}</div>
            <div className="flex gap-1">
              {[...Array(member.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
