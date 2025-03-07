import ReactLenis from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef, useState} from "react";
import { ModalComponent } from "./modalBuonoComponent";


export const Schedule = () => {
    const [openModalId, setOpenModalId] = useState<string | null>(null);  
    const [open, setOpen] = useState(false);
    const scheduleItems = [
        {
            id: "1",
            title: "BUONO SPESA",
            description: "Buono per fare la spesa insieme",
            quantity: "Buoni 3",
            content: "Quando ti sentirai sola, e avrai bisogno di compagnia per fare la spesa, io ci sarò"
        },
        {
            id: "2",
            title: "BUONO PER SFOGARSI",
            description: "Buono per sfogarsi senza venir giudicati",
            quantity: "Buoni 3",
            content:"Quando avrai bisogno di sfogarti e saprai di aver bisogno qualcuno che non ti giudichi, puoi confidare su di me"
        },
        {
            id: "3",
            title: "BUONO PER RICHIESTA SENZA FARE DOMANDE",
            description: "Buono per avanzare una richiesta senza che vengano fatte domande a riguardo",
            quantity: "Buoni 2",
            content:"Quando sarai in difficoltà e avrai bisogno che qualcuno ti aiuti senza che ti faccia domande a riguardo, puoi contare su di me"
        },
        {
            id: "4",
            title: "BUONO CHEF PRIVATO",
            description: "Cucino quello che vuoi tu",
            quantity: "Buoni 2",
            content:"Quando avrai voglia del tuo piatto preferito, o semplicemente non avrai voglia di cucinare, io mi metterò ai fornelli per te"
        },
        {
            id: "5",
            title: "REGALO SORPRESA",
            description: "Un regalo misterioso per te",
            quantity: "Buoni 1",
            content:"Esprimi un desiderio"
        },
      ];
    return (
      <section
        id="launch-schedule"
        className="mx-auto max-w-5xl px-4 py-48 text-white"
      >
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="mb-20 text-4xl font-black uppercase text-zinc-50"
        >
          Buoni disponibili
        </motion.h1>
        <div>
            {scheduleItems.map((item) => (
                <div
                key={item.id}
                onClick={() => setOpenModalId(item.id)}
                className="cursor-pointer rounded-lg"
                >
                <ScheduleItem
                    title={item.title}
                    description={item.description}
                    quantity={item.quantity}
                    content={item.content}
                />
                {/* Show modal only for the clicked item */}
                {openModalId === item.id && (
                    <ModalComponent open={true} setOpen={() => setOpenModalId(null)}>
                    <div className="mx-auto max-w-2xl space-y-4 text-neutral-400">
                        <h2 className="text-3xl font-bold text-neutral-200">{item.title}</h2>
                        <p>{item.content}</p>

                    </div>
                    </ModalComponent>
                )}
                </div>
            ))}
        </div>
      </section>
    );
  };
  
  const ScheduleItem = ({
    title,
    description,
    quantity,
    content
  }: {
    title: string;
    description: string;
    quantity: string;
    content: string
  }) => {
    return (
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
      >
        <div>
          <p className="mb-1.5 text-sm text-zinc-50">{title}</p>
          <p className="text-sm text-start uppercase text-zinc-500">{description}</p>
        </div>
        <div className="grid gap-1.5 min-w-max text-end text-sm uppercase text-zinc-500">
          <p>{quantity}</p>
        </div>
      </motion.div>
    );
  };