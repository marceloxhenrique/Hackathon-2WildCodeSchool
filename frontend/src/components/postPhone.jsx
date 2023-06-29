import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";

export default function PostPhone({ phoneData }) {
  const [memory, setMemory] = useState(0);
  const [ram, setRam] = useState(0);
  const [operatyngS, setOperatyngS] = useState(0);
  const [category, setCategory] = useState(0);
  const [resultC, setResultC] = useState("");

  const setPhoneData = () => {
    if (+phoneData.memory === 16) {
      setMemory(31);
    } else if (+phoneData.memory === 32) {
      setMemory(45);
    } else if (+phoneData.memory === 64) {
      setMemory(66);
    } else if (+phoneData.memory >= 128) {
      setMemory(0);
    }

    if (phoneData.operatyngSystem === "iOS") {
      setOperatyngS(100);
    } else if (phoneData.operatyngSystem === "Android") {
      setOperatyngS(50);
    }

    if (+phoneData.ram === 1) {
      setRam(30);
    } else if (+phoneData.ram === 2) {
      setRam(40);
    } else if (+phoneData.ram === 3) {
      setRam(54);
    } else if (+phoneData.ram > 3) {
      setRam(0);
    }
    const result = memory + ram + operatyngS;
    setCategory(result);

    if (category < 90) {
      setResultC("1 - HC");
    } else if (category <= 165) {
      setResultC("2 - C");
    } else if (category <= 155) {
      setCategory("3 - B");
    } else if (category <= 375) {
      setCategory("4 - A");
    } else {
      setCategory("5 Premium");
    }
  };

  useEffect(() => {
    // handlePhoneCategory();
    setPhoneData();
  }, [phoneData]);
  return (
    <div>
      <div>
        Memory:{memory && <p>{memory}</p>} <br />
        Ram: {ram && <p>{ram}</p>} <br />
        Operating: {operatyngS && <p>{operatyngS}</p>} <br />
        category: {category && <p>{category}</p>} <br />
        {category > 90 && category < 165}
        Result: {resultC && <p>{resultC}</p>}
      </div>
    </div>
  );
}

PostPhone.propTypes = {
  phoneData: PropTypes.shape({
    operatyngSystem: PropTypes.string,
    brand: PropTypes.string,
    model: PropTypes.string,
    color: PropTypes.string,
    memory: PropTypes.string,
    ram: PropTypes.string,
    state: PropTypes.string,
    charger: PropTypes.string,
  }),
};

PostPhone.defaultProps = {
  phoneData: {},
};
