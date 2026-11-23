export const pyqData = [
  {
    id: "pyq-2024-cbse-12-phy",
    year: "2024",
    board: "CBSE Board Examination",
    classLevel: "12",
    subject: "Physics",
    code: "55/1/1",
    set: "Set 1",
    totalMarks: 70,
    timeAllowed: "3 Hours",
    difficulty: "Moderate",
    examDate: "March 04, 2024",
    fileSize: "4.8 MB",
    sections: [
      { name: "Section A", questionType: "16 MCQs & Assertion-Reason", marksPerQ: 1, total: 16 },
      { name: "Section B", questionType: "5 Very Short Answer", marksPerQ: 2, total: 10 },
      { name: "Section C", questionType: "7 Short Answer", marksPerQ: 3, total: 21 },
      { name: "Section D", questionType: "2 Case-Based Questions", marksPerQ: 4, total: 8 },
      { name: "Section E", questionType: "3 Long Answer Questions", marksPerQ: 5, total: 15 }
    ],
    sampleQuestions: [
      {
        qNum: 1,
        type: "MCQ",
        text: "Two point charges +8q and -2q are located at x = 0 and x = L respectively. The location of a point on the x-axis at which net electric field is zero is:",
        options: ["x = 2L", "x = -2L", "x = L/2", "x = 4L"],
        correctOption: "x = 2L",
        markingPoint: "Equating electric field magnitudes E₁ = E₂ => k(8q)/x² = k(2q)/(x-L)² gives x = 2L outside the smaller charge.",
        topic: "Electrostatics"
      },
      {
        qNum: 17,
        type: "Section B (2 Marks)",
        text: "Draw the circuit diagram of a full-wave rectifier using two diodes. Sketch the input and output waveforms.",
        markingPoint: "1 mark for clean center-tapped transformer diagram with diodes D1, D2 and load resistor; 1 mark for corresponding rectified sinusoidal ripple waveforms.",
        topic: "Semiconductors"
      },
      {
        qNum: 29,
        type: "Section E (5 Marks)",
        text: "Derive the Lens Maker's formula for a thin convex lens of radii of curvature R₁ and R₂. State any two sign convention assumptions.",
        markingPoint: "1 mark for refraction at surface 1 (μ₂/v₁ - μ₁/u = (μ₂-μ₁)/R₁); 1 mark for refraction at surface 2; 2 marks for algebraic addition; 1 mark for sign convention statements.",
        topic: "Ray Optics"
      }
    ]
  },
  {
    id: "pyq-2023-cbse-12-math",
    year: "2023",
    board: "CBSE Board Examination",
    classLevel: "12",
    subject: "Mathematics",
    code: "65/2/2",
    set: "Set 2",
    totalMarks: 80,
    timeAllowed: "3 Hours",
    difficulty: "Hard",
    examDate: "March 11, 2023",
    fileSize: "5.2 MB",
    sections: [
      { name: "Section A", questionType: "20 MCQs (including 2 A/R)", marksPerQ: 1, total: 20 },
      { name: "Section B", questionType: "5 Very Short Answer", marksPerQ: 2, total: 10 },
      { name: "Section C", questionType: "6 Short Answer", marksPerQ: 3, total: 18 },
      { name: "Section D", questionType: "4 Long Answer", marksPerQ: 5, total: 20 },
      { name: "Section E", questionType: "3 Case Study Integrated Units", marksPerQ: 4, total: 12 }
    ],
    sampleQuestions: [
      {
        qNum: 5,
        type: "MCQ",
        text: "If A is a square matrix of order 3 such that |adj A| = 64, then the value of |A| is:",
        options: ["±8", "±4", "±64", "±16"],
        correctOption: "±8",
        markingPoint: "|adj A| = |A|^(n-1). Since n = 3, |adj A| = |A|² = 64 => |A| = ±8.",
        topic: "Matrices & Determinants"
      },
      {
        qNum: 26,
        type: "Section C (3 Marks)",
        text: "Evaluate: ∫ [x / ((x-1)(x-2))] dx using partial fractions.",
        markingPoint: "1 mark for partial fraction splitting x/((x-1)(x-2)) = -1/(x-1) + 2/(x-2); 1 mark for individual integrals; 1 mark for final result 2 ln|x-2| - ln|x-1| + C.",
        topic: "Integrals"
      }
    ]
  },
  {
    id: "pyq-2023-cbse-12-chem",
    year: "2023",
    board: "CBSE Board Examination",
    classLevel: "12",
    subject: "Chemistry",
    code: "56/3/1",
    set: "Set 1",
    totalMarks: 70,
    timeAllowed: "3 Hours",
    difficulty: "Moderate",
    examDate: "February 28, 2023",
    fileSize: "4.5 MB",
    sections: [
      { name: "Section A", questionType: "16 MCQs & Assertion-Reason", marksPerQ: 1, total: 16 },
      { name: "Section B", questionType: "5 Very Short Answer", marksPerQ: 2, total: 10 },
      { name: "Section C", questionType: "7 Short Answer", marksPerQ: 3, total: 21 },
      { name: "Section D", questionType: "2 Case-Based Questions", marksPerQ: 4, total: 8 },
      { name: "Section E", questionType: "3 Long Answer Questions", marksPerQ: 5, total: 15 }
    ],
    sampleQuestions: [
      {
        qNum: 3,
        type: "MCQ",
        text: "Which of the following colligative properties is most suitable for determining the molecular weight of polymers and biomolecules?",
        options: ["Osmotic Pressure", "Relative lowering of vapor pressure", "Elevation of boiling point", "Depression of freezing point"],
        correctOption: "Osmotic Pressure",
        markingPoint: "Osmotic pressure can be measured at room temperature and produces sizable measurable readings even for very dilute molarities.",
        topic: "Solutions"
      }
    ]
  },
  {
    id: "pyq-2024-cbse-11-phy",
    year: "2024",
    board: "CBSE Annual School Examination",
    classLevel: "11",
    subject: "Physics",
    code: "XI-PHY-01",
    set: "All Sets",
    totalMarks: 70,
    timeAllowed: "3 Hours",
    difficulty: "Moderate",
    examDate: "February 18, 2024",
    fileSize: "3.9 MB",
    sections: [
      { name: "Section A", questionType: "16 MCQs", marksPerQ: 1, total: 16 },
      { name: "Section B", questionType: "5 Short Answer", marksPerQ: 2, total: 10 },
      { name: "Section C", questionType: "7 Analytical Questions", marksPerQ: 3, total: 21 },
      { name: "Section D", questionType: "2 Case Studies", marksPerQ: 4, total: 8 },
      { name: "Section E", questionType: "3 Derivations & Problems", marksPerQ: 5, total: 15 }
    ],
    sampleQuestions: [
      {
        qNum: 2,
        type: "MCQ",
        text: "The dimensional formula of universal gravitational constant G is:",
        options: ["[M⁻¹ L³ T⁻²]", "[M¹ L³ T⁻²]", "[M⁻¹ L² T⁻²]", "[M⁰ L³ T⁻¹]"],
        correctOption: "[M⁻¹ L³ T⁻²]",
        markingPoint: "G = F·r² / (m₁m₂) = [M L T⁻²][L²] / [M²] = [M⁻¹ L³ T⁻²].",
        topic: "Units and Measurements"
      }
    ]
  }
];
