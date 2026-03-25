"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const beliefs = [
  {
    title: "La Biblia",
    text: "Creemos que la Biblia es la Palabra de Dios, inspirada por el Espíritu Santo, infalible y la autoridad final para la fe y la vida cristiana.",
    verse: "2 Timoteo 3:16-17",
  },
  {
    title: "Dios",
    text: "Creemos en un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo — cada uno plenamente Dios, coiguales y coeternos.",
    verse: "Mateo 28:19",
  },
  {
    title: "Jesucristo",
    text: "Creemos que Jesucristo es el Hijo de Dios, nacido de una virgen, que vivió una vida sin pecado, murió en la cruz por nuestros pecados, resucitó al tercer día y ascendió al cielo.",
    verse: "Juan 3:16",
  },
  {
    title: "El Espíritu Santo",
    text: "Creemos en el Espíritu Santo que convence al mundo de pecado, regenera al creyente, y habita en cada cristiano para guiarlo, enseñarlo y fortalecerlo.",
    verse: "Juan 14:26",
  },
  {
    title: "La Salvación",
    text: "Creemos que la salvación es un regalo de Dios, recibido por gracia a través de la fe en Jesucristo. No se obtiene por obras sino por la fe en su sacrificio en la cruz.",
    verse: "Efesios 2:8-9",
  },
  {
    title: "La Iglesia",
    text: "Creemos que la iglesia es el cuerpo de Cristo, formada por todos los creyentes. Cada miembro tiene un propósito y un llamado dentro de la comunidad de fe.",
    verse: "1 Corintios 12:27",
  },
  {
    title: "La Segunda Venida",
    text: "Creemos en el regreso literal y visible de Jesucristo a la tierra, según las promesas de las Escrituras. Vivimos con esperanza y expectativa de su venida.",
    verse: "Hechos 1:11",
  },
  {
    title: "La Oración",
    text: "Creemos en el poder de la oración como medio de comunicación con Dios. A través de ella, presentamos nuestras peticiones conforme a su voluntad y experimentamos su fidelidad.",
    verse: "Filipenses 4:6-7",
  },
];

export default function LoQueCreemos() {
  return (
    <>
      <PageHeader
        label="Nuestra Fe"
        title="Lo que Creemos"
        subtitle="Estas son las verdades bíblicas fundamentales que guían nuestra vida y nuestra comunidad."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {beliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-beige-50 border border-aqua-100/30"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {belief.title}
                  </h3>
                  <span className="text-xs font-medium text-aqua-600 bg-aqua-50 px-3 py-1 rounded-full whitespace-nowrap">
                    {belief.verse}
                  </span>
                </div>
                <p className="text-gray-500 leading-relaxed">{belief.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
