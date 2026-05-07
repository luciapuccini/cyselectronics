import type { ReactNode } from 'react';
import magnaposi from '../assets/products/Magnaposi.png';
import rotor from '../assets/products/rotor.jpg';
import pemcc from '../assets/products/pemcc.png';

type ProductConfig = {
  name: string;
  title: string;
  detail: string;
  description: ReactNode;
  link: string;
  image: string;
  brochure?: string;
  presentation?: ReactNode;
  complete_title?: string;
};

const productsConfig: ProductConfig[] = [
  {
    description:
      'In pickling processes it is important to control the depth to which the material is immersed. To achieve that, a reliable measurement must be done. The MAGNAPOSI System performs this function without contact with the acid solution and is maintenance free.',
    detail: 'Steel catenary measurement in pickling processes.',
    link: '/products/positioning/magnaposi',
    name: 'magnaposi',
    title: 'Magnaposi SM-500T',
    image: magnaposi,
    brochure: '',
    presentation: undefined,
    complete_title: '',
  },
  {
    description: (
      <>
        <p>
          C&amp;S's DC motor protection system model PEMCC evaluates the rotor
          solicitation of a DC machine through its current sensing.
        </p>
        <p>You can configure two different operation modes:</p>

        <b>Mode TI-2</b>
        <p>
          It is designed to replace electromechanical or overcurrent relays in
          general. It is also possible to configure an instantaneous trip.
        </p>

        <b>Thermal model mode</b>
        <p>
          Enter the motor physical parameters to analyse the actual thermal
          state of the machine. Useful, for example, in the case of successive
          starts or alternate load cycles where TI-2 mode may not contemplate
          accumulated heating. An instantaneous trip can also be configured.
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
        title="manual"
        src="https://e.issuu.com/embed.html?identifier=z39bobtblh88&embedType=script#1523476/13436921"
        sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups"
      />
    ),
  },
  {
    description: (
      <>
        <p>
          The presence of imbalances in the rotor currents of a three-phase AC
          motor can cause vibration, mechanical deformation, and damage to the
          windings.
        </p>
        <p>
          C&amp;S’s rotor protection system measures the three currents in rotor
          windings of all sizes.
        </p>
        <p>
          It detects current imbalance and rotor overcurrent, raising alarms to
          prevent malfunction. The system also provides an output proportional
          to the imbalance.
        </p>
        <p>
          Adjustments are made via a keyboard and display that provide status
          information, unbalance values, overcurrent settings, and trip times.
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
    presentation: undefined,
    complete_title: '',
  },
];

export const getProduct = (name: string): ProductConfig | undefined =>
  productsConfig.find((product) => product.name === name);
