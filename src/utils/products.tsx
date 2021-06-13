import React from 'react';
import magnaposi from '../assets/products/Magnaposi.png';
import rotor from '../assets/products/rotor.jpg';
import pemcc from '../assets/products/pemcc.png';


export  interface Product {
  description: any;
  detail: string;
  link: string;
  name: string;
  title: string;
  image: string;
  brochure: string;
  presentation: any;
  complete_title?: string;

}

export const productsConfig = [
  {
    description:
      'In pickling processes is important to control the depth to which the material is immersed. To achieve that a reliable measurement must be done. The MAGNAPOSI System performs this function without contact with the acid solution and is maintenance free.',
    detail: 'Steel catenary measurement in pickling processes.',
    link: '/products/positioning/magnaposi',
    name: 'magnaposi',
    title: 'Magnaposi SM-500T',
    image: magnaposi,
    brochure: '',
    presentation: '',
    complete_title: '',
  },
  {
    description: (
      <>
        <p>
          C&S's DC motor protection system model PEMCC evaluates the rotor
          solicitation of a dc machine through its current sensing.
        </p>
        <p>You can configure two different operation modes:</p>

        <b>Mode TI-2</b>
        <p>
          It is designed to replace electromechanical or overcurrent relays in
          general. It is also possible to configure an instantaneous trip.
        </p>

        <b>M. T. Mode (Thermal Model)</b>
        <p>
          It’s a special mode in which you can enter the motor physical
          parameters to analyze the actual thermal state of the machine. Useful,
          for example, in the case of successive starts or alternate cycles of
          loading, where TI-2 mode may not contemplate actual heating
          accumulated due to these efforts. You can also set an instantaneous
          trip.
        </p>
      </>
    ),
    detail:
      'Motor protection system that evaluates the rotor solicitation of a dc machine through its current sensing.',
    link: '/products/protection/pemcc',
    name: 'pemcc',
    title: 'PEMCC',
    complete_title:
      'ELECTRONIC PROTECTION SYSTEM FOR DIRECT CURRENT MOTORS PEMCC',
    image: pemcc,
    brochure: '',
    presentation: (
      <iframe
      title='manual'
        src="https://e.issuu.com/embed.html?identifier=z39bobtblh88&embedType=script#1523476/13436921"
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups"
      />
    ),
  },
  {
    description: (
      <>
        <p>
          The presence of imbalances in the rotor currents of a three-phase ac
          motors winding rotor can cause significant problems such as vibration,
          mechanical deformation and / or breakage of the windings.
        </p>
        <p>
          C & S’s rotor protection system performs the measurement of the three
          currents in the rotor winding engines of all sizes.
        </p>
        <p>
          It has the ability to detect the existence of current and rotor
          unbalance overcurrent. Should a fault be detected, the system gives an
          alarm to prevent operating conditions that may cause a malfunction. It
          also provides an output current proportional to the imbalance.
        </p>
        <p>
          Adjustments are made via keyboard and a display which has available
          status information, the current value of each phase unbalance,
          overcurrent settings and trip times.
        </p>
      </>
    ),
    detail:
      'Rotor protection system for the measurement of the three currents in the rotor winding engines of all sizes.',
    link: '/products/protection/rotor',
    name: 'rotor',
    title: 'PROTECTION ROTOR C&S',
    image: rotor,
    brochure: '',
    presentation: '',
    complete_title: '',
  },
];

export const getProduct = (name: string) =>
  productsConfig.find((product) => product.name === name)

