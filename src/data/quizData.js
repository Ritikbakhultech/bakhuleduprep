export const quizData = [
  {
    id: "quiz-phy-electrostatics",
    title: "Electrostatics & Gauss's Law Mastery Test",
    subject: "Physics",
    classLevel: "12",
    durationMinutes: 15,
    difficulty: "Moderate",
    description: "Test your conceptual understanding of Coulomb's law, electric dipole moment, and Gaussian flux calculations.",
    totalQuestions: 5,
    questions: [
      {
        id: "q1",
        question: "An electric dipole of moment p is placed in a uniform electric field E. The torque experienced by it and its potential energy when aligned anti-parallel to the field are respectively:",
        options: [
          "Torque = 0, Potential Energy = +pE",
          "Torque = pE, Potential Energy = -pE",
          "Torque = 0, Potential Energy = -pE",
          "Torque = p × E, Potential Energy = 0"
        ],
        correctIndex: 0,
        explanation: "Torque τ = p × E = pE sin(180°) = 0. Potential energy U = -p · E = -pE cos(180°) = -pE(-1) = +pE. This represents the unstable equilibrium state.",
        topic: "Dipole in Uniform Field"
      },
      {
        id: "q2",
        question: "A spherical Gaussian surface encloses a point charge q at its center. If the radius of the sphere is doubled, what happens to the total electric flux passing through the surface?",
        options: [
          "It remains unchanged",
          "It becomes doubled",
          "It is halved",
          "It increases fourfold"
        ],
        correctIndex: 0,
        explanation: "By Gauss's Law, Φ = q_enclosed / ε₀. The total flux depends only on the enclosed charge and is independent of the size or shape of the Gaussian surface.",
        topic: "Gauss's Theorem"
      },
      {
        id: "q3",
        question: "Two parallel plate capacitors of equal capacitance C are connected in parallel and charged to potential V. If they are now disconnected from battery and connected in series, the new equivalent capacitance and stored energy are:",
        options: [
          "C/2 and unchanged energy",
          "2C and double energy",
          "C/2 and half energy",
          "C and unchanged energy"
        ],
        correctIndex: 0,
        explanation: "In series, C_eq = (C·C)/(C+C) = C/2. Since the total isolated charge is conserved, the total electrostatic energy remains conserved (ignoring radiation loss during connection).",
        topic: "Capacitor Networks"
      },
      {
        id: "q4",
        question: "The electric potential at a point on the equatorial plane of an electric dipole is:",
        options: [
          "Zero",
          "k · p / r²",
          "k · p / r³",
          "Infinite"
        ],
        correctIndex: 0,
        explanation: "Every point on the equatorial plane is equidistant from +q and -q. Hence V = k(+q)/r + k(-q)/r = 0. (Note: The electric field here is non-zero and points opposite to dipole moment).",
        topic: "Equatorial Potential"
      },
      {
        id: "q5",
        question: "When a dielectric slab of dielectric constant K = 4 is inserted between the plates of an isolated charged capacitor, the electric field between the plates:",
        options: [
          "Decreases to E₀ / 4",
          "Increases by 4 times",
          "Remains unchanged",
          "Becomes zero"
        ],
        correctIndex: 0,
        explanation: "For an isolated capacitor, charge Q is constant. The polarized charges on dielectric surfaces produce an internal field opposing the external field, reducing the net field to E = E₀ / K.",
        topic: "Dielectric Polarization"
      }
    ]
  },
  {
    id: "quiz-chem-solutions",
    title: "Solutions & Colligative Properties Diagnostic",
    subject: "Chemistry",
    classLevel: "12",
    durationMinutes: 12,
    difficulty: "Easy-Medium",
    description: "Assess your grip on Raoult's law deviations, molarity-molality conversions, and Van 't Hoff factors.",
    totalQuestions: 5,
    questions: [
      {
        id: "qc1",
        question: "Which of the following aqueous solutions exhibits the highest boiling point?",
        options: [
          "0.1 M Al₂(SO₄)₃",
          "0.1 M BaCl₂",
          "0.1 M NaCl",
          "0.1 M Glucose"
        ],
        correctIndex: 0,
        explanation: "Boiling point elevation ΔTb = i·Kb·m. For Al₂(SO₄)₃, i = 5 (2 Al³⁺ + 3 SO₄²⁻). Effective solute particle concentration = 5 × 0.1 = 0.5 M, highest among all choices.",
        topic: "Colligative Properties"
      },
      {
        id: "qc2",
        question: "A mixture of ethanol and acetone shows:",
        options: [
          "Positive deviation from Raoult's law",
          "Negative deviation from Raoult's law",
          "Ideal solution behavior",
          "Forms maximum boiling azeotrope"
        ],
        correctIndex: 0,
        explanation: "In pure ethanol, hydrogen bonding exists between molecules. Addition of acetone molecules gets in between ethanol molecules, breaking existing H-bonds and lowering intermolecular forces (A-B < A-A, B-B). Hence positive deviation.",
        topic: "Non-Ideal Solutions"
      },
      {
        id: "qc3",
        question: "Henry's law constant (K_H) for gas solubility in liquid:",
        options: [
          "Increases with increase in temperature",
          "Decreases with increase in temperature",
          "Remains constant at all temperatures",
          "First increases then decreases"
        ],
        correctIndex: 0,
        explanation: "Since p = K_H · x, a higher K_H at a given partial pressure means lower solubility x. As temperature rises, gas solubility in liquids decreases, which corresponds to an increase in K_H.",
        topic: "Gas Solubility"
      },
      {
        id: "qc4",
        question: "The value of Van 't Hoff factor 'i' for complete dimerization of benzoic acid in benzene is:",
        options: [
          "0.5",
          "1.0",
          "2.0",
          "0.0"
        ],
        correctIndex: 0,
        explanation: "Benzoic acid dimerizes: 2 C₆H₅COOH ⇌ (C₆H₅COOH)₂. When degree of association α = 1 (100%), i = 1 + (1/n - 1)α = 1 + (1/2 - 1)(1) = 0.5.",
        topic: "Abnormal Molar Mass"
      },
      {
        id: "qc5",
        question: "During reverse osmosis, the direction of flow of solvent is:",
        options: [
          "From concentrated solution to dilute solvent through SPM under applied pressure > π",
          "From dilute to concentrated solution under normal atmospheric pressure",
          "Independent of osmotic pressure",
          "From pure solvent to concentrated solution under pressure < π"
        ],
        correctIndex: 0,
        explanation: "When pressure higher than the osmotic pressure is applied on the solution side, solvent molecules flow backwards through the semipermeable membrane from solution to pure solvent.",
        topic: "Reverse Osmosis"
      }
    ]
  },
  {
    id: "quiz-math-calculus",
    title: "Class 12 Calculus & Integrals Sprint",
    subject: "Mathematics",
    classLevel: "12",
    durationMinutes: 15,
    difficulty: "Hard",
    description: "Rapid check on definite integral properties, maxima-minima derivatives, and substitution tricks.",
    totalQuestions: 5,
    questions: [
      {
        id: "qm1",
        question: "The value of definite integral ∫[-π/2 to π/2] (sin⁷ x + x³) dx is:",
        options: [
          "0",
          "π / 2",
          "1",
          "2"
        ],
        correctIndex: 0,
        explanation: "Both f(x) = sin⁷(x) and g(x) = x³ are odd functions because f(-x) = -f(x). For any odd function integrated over symmetric limits [-a, a], the integral is strictly 0.",
        topic: "Definite Integral Symmetry"
      },
      {
        id: "qm2",
        question: "If f(x) = x³ - 3x² + 3x - 100, then f(x) is:",
        options: [
          "Strictly increasing on R",
          "Strictly decreasing on R",
          "Neither increasing nor decreasing",
          "Increasing only on [0, ∞)"
        ],
        correctIndex: 0,
        explanation: "f'(x) = 3x² - 6x + 3 = 3(x - 1)² >= 0 for all real x, and vanishes only at isolated point x = 1. Therefore, f(x) is strictly increasing everywhere on R.",
        topic: "Monotonicity"
      },
      {
        id: "qm3",
        question: "The integrating factor for linear differential equation: x · (dy/dx) - y = 2x² is:",
        options: [
          "1 / x",
          "x",
          "ln x",
          "-1 / x"
        ],
        correctIndex: 0,
        explanation: "Writing in standard form: dy/dx + (-1/x)y = 2x. P = -1/x. Integrating factor IF = e^(∫ -1/x dx) = e^(-ln x) = e^(ln(1/x)) = 1/x.",
        topic: "Differential Equations"
      },
      {
        id: "qm4",
        question: "Evaluate: lim(x->0) [ (1 - cos 2x) / x² ]",
        options: [
          "2",
          "1",
          "4",
          "1/2"
        ],
        correctIndex: 0,
        explanation: "1 - cos 2x = 2 sin² x. So lim (x->0) 2(sin x / x)² = 2 × (1)² = 2.",
        topic: "Limits"
      },
      {
        id: "qm5",
        question: "If A and B are independent events with P(A) = 0.3 and P(B) = 0.4, then P(A ∪ B) is:",
        options: [
          "0.58",
          "0.70",
          "0.12",
          "0.82"
        ],
        correctIndex: 0,
        explanation: "For independent events, P(A ∩ B) = P(A)·P(B) = 0.3 × 0.4 = 0.12. Then P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.4 - 0.12 = 0.58.",
        topic: "Probability"
      }
    ]
  }
];
