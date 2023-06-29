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
import framePhone from "../../assets/frame-iphone.png";
import styles from "./Evaluation.module.css";
import { api } from "./api";

export default function Evaluation() {
  const [phoneData, setPhoneData] = React.useState({
    operatyngSystem: "",
    brand: "",
    model: "",
    color: "",
    memory: "",
    ram: "",
    state: "",
    charger: "Oui",
  });

  const [brandAvailable, setBrandavailable] = React.useState({});
  const [modelsAvailable, setModelsAvailable] = React.useState({});
  const [colorsAvailable, setColorsAvailable] = React.useState({});
  const [storageAvailable, setStorageAvailable] = React.useState({});
  const [memoryAvailable, setMemoryAvailable] = React.useState({});
  const [stateAvailable, setStateAvailable] = React.useState({});

  React.useEffect(() => {
    const getBrands = async () => {
      const res = await api.brandAvailable();
      setBrandavailable(res);
    };

    const getModels = async () => {
      const res = await api.modelAvailable();
      setModelsAvailable(res);
    };

    const getColors = async () => {
      const res = await api.colorAvailable();
      setColorsAvailable(res);
    };

    const getStorage = async () => {
      const res = await api.storageAvailable();
      setStorageAvailable(res);
    };

    const getMemory = async () => {
      const res = await api.memoryAvailable();
      setMemoryAvailable(res);
    };

    const getState = async () => {
      const res = await api.stateAvailable();
      setStateAvailable(res);
    };

    getBrands();
    getModels();
    getColors();
    getStorage();
    getMemory();
    getState();
  }, [phoneData]);

  const [activeStep, setActiveStep] = React.useState(0);
  const [registerButton, setRegisterButton] = React.useState(false);
  const [validatePhone, setValidatePhone] = React.useState(false);

  const handleToggle = () => {
    setValidatePhone(true);
  };

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
  const handleLastResetButton = () => {
    setValidatePhone(false);
    // handleBack();
    // setValidatePhone(false);
  };

  const [price, setPrice] = React.useState();

  const handleCalculatePrice = () => {
    console.warn(phoneData);

    let valA = "";
    let valM = "";
    let valS = "";

    // valeur en fonction du de l'indice
    if (phoneData.operatyngSystem === "Android") {
      valA = 40;
    } else if (phoneData.operatyngSystem === "iOS") {
      valA = 44;
    }

    // valeur en fonction de  la mémoire
    if (phoneData.ram === 4) {
      valM = 30;
    } else if (phoneData.ram === 6) {
      valM = 40;
    } else if (phoneData.ram === 8) {
      valM = 54;
    }

    // valeur en fonction du stockage
    if (phoneData.memory === "64 Go") {
      valS = 31;
    } else if (phoneData.memory === "128 Go") {
      valS = 45;
    } else if (phoneData.memory === "256 Go") {
      valS = 66;
    }
    // console.log(valA)
    // Calculating the price
    const calculatedPrice = valA + valM + valS;
    setPrice(calculatedPrice);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Typography variant="h4" color="initial">
          <Box
            sx={{
              maxWidth: "xl",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 200,
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
          <Typography variant="h4" color="initial">
            <Box sx={{ maxWidth: "xl", m: "auto" }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {/* {step operating system} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h5" color="initial">
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
                    <Typography variant="h5" color="initial">
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
                    <Typography variant="h5" color="initial">
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
                      {modelsAvailable.map((option) => (
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
                    <Typography variant="h5" color="initial">
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
                      {colorsAvailable.map((option) => (
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
                    <Typography variant="h5" color="initial">
                      Capacité de stockage
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      {storageAvailable.map((option) => (
                        <button
                          type="button"
                          key={option.id}
                          name="memory"
                          value={option.storage}
                          className={styles.buttonInputMemory}
                          onClick={handlePhoneData}
                        >
                          {option.storage}
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
                {/* {step ram} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h3" color="initial">
                      RAM
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      {memoryAvailable.map((option) => (
                        <button
                          type="button"
                          key={option.id}
                          name="ram"
                          value={option.memory}
                          className={styles.buttonInputMemory}
                          onClick={handlePhoneData}
                        >
                          {option.memory}
                        </button>
                      ))}
                    </div>
                    <Typography>{phoneData.ram}</Typography>
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
                {/* {Finished step ram} */}
                {/* {step phone state} */}
                <Step sx={{ minHeight: 150 }}>
                  <StepLabel>
                    <Typography variant="h5" color="initial">
                      État du téléphone
                    </Typography>
                  </StepLabel>
                  <StepContent>
                    <div className={styles.container}>
                      {stateAvailable.map((option) => (
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
                    <Typography variant="h5" color="initial">
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
                        defaultValue="Oui"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Oui"
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
                          onClick={(handleNext, handleToggle)}
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
              {validatePhone ? (
                <>
                  <div className={styles.validatePhone}>
                    <img src={framePhone} alt="" />

                    <div className={styles.phonedisplayData}>
                      <p>
                        Système d’exploitation:{" "}
                        <b>{phoneData.operatyngSystem}</b>
                      </p>
                      <p>
                        Marque: <b>{phoneData.brand}</b>{" "}
                      </p>
                      <p>
                        Modèle: <b>{phoneData.model} </b>{" "}
                      </p>
                      <p>
                        Couleur: <b>{phoneData.color} </b>{" "}
                      </p>
                      <p>
                        Capacité de stockage: <b>{phoneData.memory}</b>{" "}
                      </p>
                      <p>
                        RAM: <b>{phoneData.ram} Go</b>{" "}
                      </p>
                      <p>
                        État du téléphone : <b>{phoneData.state} </b>
                      </p>
                      <p>
                        Présence d’un chargeur ?: <b>{phoneData.charger}</b>{" "}
                      </p>
                    </div>
                  </div>
                  <div className={styles.containerValidate}>
                    <button
                      type="button"
                      className={styles.validateResetButton}
                      onClick={handleLastResetButton}
                    >
                      Retour
                    </button>
                    <button
                      type="button"
                      onClick={handleCalculatePrice}
                      className={styles.validateResetButton}
                    >
                      Valider
                    </button>
                  </div>
                </>
              ) : undefined}
              <Paper square elevation={0} sx={{ p: 3 }}>
                {price && (
                  <Box>
                    <Typography variant="h3" color="primary">
                      Prix Estimé:
                    </Typography>
                    <Typography variant="h1" color="primary">
                      {price}€
                    </Typography>
                  </Box>
                )}

                {price > 0 ? (
                  <Typography>
                    Toutes les étapes sont terminées - le téléphone a été
                    enregistré
                  </Typography>
                ) : null}
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
