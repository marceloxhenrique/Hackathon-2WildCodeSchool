import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  return (
    <div>
      <Accordion sx={{ marginTop: "3rem", backgroundColor: "primary.main" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBlockEnd: "1px solid",
            writingMode: "horizontal-tb",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Comment fonctionne l'estimation de prix de téléphone ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "secondary.main" }}>
          <Typography>
            L'estimation de prix de téléphone utilise des données basées sur le
            modèle, la marque, l'état général et d'autres caractéristiques du
            téléphone pour estimer sa valeur marchande actuelle à un prix
            raisonnable pour les potentiels acheteurs Emmaüs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBlockEnd: "1px solid",
            writingMode: "horizontal-tb",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Comment puis-je trouver le modèle exact de mon téléphone ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "secondary.main" }}>
          <Typography>
            Le modèle exact de votre téléphone est généralement indiqué sur le
            dos de l'appareil ou dans les paramètres du téléphone. Vous pouvez
            également effectuer une recherche en ligne en utilisant le numéro de
            modèle figurant sur votre téléphone.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBlockEnd: "1px solid",
            writingMode: "horizontal-tb",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Qu'est-ce qu'un indice de smartphone ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "secondary.main" }}>
          <Typography>
            Un indice de smartphone est une évaluation de la performance globale
            d'un smartphone en se basant sur différents critères tels que la
            puissance du processeur, la capacité de la batterie, la qualité de
            l'appareil photo, la résolution de l'écran, etc. Cet indice permet
            aux utilisateurs de comparer et de choisir le smartphone qui
            correspond le mieux à leurs besoins.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBlockEnd: "1px solid",
            writingMode: "horizontal-tb",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Comment fonctionne l'indice de smartphone ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "secondary.main" }}>
          <Typography>
            L'indice de smartphone est généralement calculé en attribuant des
            scores à chaque critère évalué, puis en effectuant une pondération
            appropriée en fonction de l'importance relative de chaque critère.
            Les scores individuels sont ensuite combinés pour obtenir un score
            global, souvent exprimé sous la forme d'un nombre ou d'une échelle,
            permettant une comparaison facile entre différents smartphones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: "primary.main",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            borderBlockEnd: "1px solid",
            writingMode: "horizontal-tb",
          }}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            Quels critères sont pris en compte dans l'indice de smartphone ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "secondary.main" }}>
          <Typography>
            Les critères pris en compte dans l'indice de smartphone peuvent
            varier, mais ils incluent généralement des éléments tels que la
            performance du processeur, la capacité de la batterie, la qualité de
            l'appareil photo (résolution, ouverture, stabilisation), la mémoire
            RAM, la capacité de stockage, la résolution et la taille de l'écran,
            la connectivité, les fonctionnalités logicielles, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
