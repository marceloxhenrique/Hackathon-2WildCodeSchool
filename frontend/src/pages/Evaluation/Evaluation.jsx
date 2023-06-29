import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Navbar from "../../components/Navbar";
import android from "../../assets/android.png";
import apple from "../../assets/apple.png";
import styles from "./Evaluation.module.css";

const brandAvailable = [
  {
    id: 1,
    brand: "Apple",
  },
  {
    id: 2,
    brand: "Samsung",
  },
  {
    id: 3,
    brand: "Xiaomi",
  },
];

const modelAvailable = [
  {
    id: 1,
    model: "iPhone 10 Pro",
  },
  {
    id: 2,
    model: "Samsung s18",
  },
  {
    id: 3,
    model: "Redmi 12C",
  },
];

const colorAvailable = [
  {
    id: 1,
    color: "Noir",
  },
  {
    id: 2,
    color: "Argent",
  },
  {
    id: 3,
    color: "Bleu",
  },
];

const memory = [
  {
    id: 1,
    memory: "8 Go",
  },
  {
    id: 2,
    memory: "16 Go",
  },
  {
    id: 3,
    memory: "32 Go",
  },
  {
    id: 4,
    memory: "64 Go",
  },
  {
    id: 5,
    memory: "128 Go",
  },
  {
    id: 6,
    memory: "256 Go",
  },
];

const state = [
  {
    id: 1,
    state: "État correct",
  },
  {
    id: 2,
    state: "Bon état",
  },
  {
    id: 3,
    state: "Très bon état",
  },
];

export default function Evaluation() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [registerButton, setRegisterButton] = React.useState(false);

  const [phoneData, setPhoneData] = React.useState({
    operatyngSystem: "",
    brand: "",
    model: "",
    color: "",
    memory: "",
    state: "",
    charger: "",
  });

  const handlePhoneData = (e) => {
    setPhoneData({ ...phoneData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h2" color="initial">
          <Box
            sx={{
              maxWidth: "xl",
              display: "flex",
              alignItems: "center",
              minHeight: 300,
            }}
          >
            Commencer l’enregistrement de nouveaux téléphones
          </Box>
          <button
            onClick={() => {
              setRegisterButton(!registerButton);
            }}
            className={styles.buttonRegister}
            type="button"
          >
            Enregistrer
          </button>
        </Typography>
        {registerButton && (
          <Typography variant="h2" color="initial">
            <Box sx={{ maxWidth: "xl", m: "auto" }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {/* {step operating system} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Quel est le système d’exploitation du téléphone ?
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      <button
                        onClick={handlePhoneData}
                        type="button"
                        className={styles.buttonInput}
                        name="operatyngSystem"
                        value="Android"
                      >
                        Android
                        <img src={android} alt="Android icon" />
                      </button>
                      <button
                        onClick={handlePhoneData}
                        type="button"
                        className={styles.buttonInput}
                        name="operatyngSystem"
                        value="iOS"
                      >
                        iOS
                        <img src={apple} alt="apple icon" />
                      </button>
                    </div>
                    <Typography>{phoneData.operatyngSystem}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          prochain
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          retour
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* {Finished step operation system} */}
                {/* {step Brand} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Marque
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <TextField
                      id="selectBrand"
                      select
                      label="Marque"
                      defaultValue=""
                      sx={{ minWidth: 250, m: 5 }}
                    >
                      {brandAvailable.map((option) => (
                        <MenuItem
                          key={option.id}
                          value={option.brand}
                          name="brand"
                        >
                          <ListItemText
                            onClick={() => {
                              setPhoneData({
                                ...phoneData,
                                brand: option.brand,
                              });
                            }}
                            name="brand"
                            value={option.brand}
                            primary={option.brand}
                          />
                          {/* {option.brand} */}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography>{phoneData.brand}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          next
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* Finished step Brand */}
                {/* starting step Model */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Modèle
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Modèle"
                      defaultValue=""
                      sx={{ minWidth: 250, m: 5 }}
                    >
                      {modelAvailable.map((option) => (
                        <MenuItem key={option.id} value={option.model}>
                          <ListItemText
                            onClick={() => {
                              setPhoneData({
                                ...phoneData,
                                model: option.model,
                              });
                            }}
                            name="brand"
                            value={option.model}
                            primary={option.model}
                          />
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography>{phoneData.model}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          next
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* Finished step Model */}
                {/* starting step Color */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Couleur
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <TextField
                      id="outlined-select-color"
                      select
                      label="Couleur"
                      defaultValue=""
                      sx={{ minWidth: 250, m: 5 }}
                    >
                      {colorAvailable.map((option) => (
                        <MenuItem key={option.id} value={option.color}>
                          <ListItemText
                            onClick={() => {
                              setPhoneData({
                                ...phoneData,
                                color: option.color,
                              });
                            }}
                            name="brand"
                            value={option.color}
                            primary={option.color}
                          />
                        </MenuItem>
                      ))}
                    </TextField>
                    <Typography>{phoneData.color}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          next
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* Finished step Color */}
                {/* {step memory} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Capacité de stockage
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      {memory.map((option) => (
                        <button
                          type="button"
                          key={option.id}
                          name="memory"
                          value={option.memory}
                          className={styles.buttonInputMemory}
                          onClick={handlePhoneData}
                        >
                          {option.memory}
                        </button>
                      ))}
                    </div>
                    <Typography>{phoneData.memory}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          prochain
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          retour
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* {Finished step memory} */}
                {/* {step phone state} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      État du téléphone
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      {state.map((option) => (
                        <button
                          type="button"
                          key={option.id}
                          name="state"
                          value={option.state}
                          className={styles.buttonInputState}
                          onClick={handlePhoneData}
                        >
                          {option.state}
                        </button>
                      ))}
                    </div>
                    <Typography>{phoneData.state}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          prochain
                        </Button>
                        <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                          retour
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* {Finished step phone state} */}
                {/* {step phone charger} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      Présence d’un chargeur ?
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <FormControl>
                      <RadioGroup
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          width: 200,
                          mt: 1,
                          m: 4,
                        }}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="oui"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="oui"
                          name="charger"
                          control={<Radio />}
                          label="Oui"
                          onClick={handlePhoneData}
                        />
                        <FormControlLabel
                          value="non"
                          name="charger"
                          control={<Radio />}
                          label="Non"
                          onClick={handlePhoneData}
                        />
                      </RadioGroup>
                    </FormControl>
                    <Typography>{phoneData.charger}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          prochain
                        </Button>
                        <Button
                          // disabled={}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          retour
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
                {/* {Finished step phone state} */}
              </Stepper>
              <div className={styles.container}>
                <button type="button" className={styles.validateResetButton}>
                  Retour
                </button>
                <button type="button" className={styles.validateResetButton}>
                  Valider
                </button>
              </div>
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  Toutes les étapes sont terminées - vous avez terminé
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            </Box>
          </Typography>
        )}
      </Container>
    </>
  );
}
