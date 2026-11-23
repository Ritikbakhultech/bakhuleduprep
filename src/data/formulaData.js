export const formulaData = [
  // Class 12 Physics
  {
    id: "f-c12-phy-1",
    classLevel: "12",
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    title: "Coulomb's Law in Vector Form",
    formula: "F₁₂ = (1 / 4πε₀) · (q₁q₂ / |r₁₂|³) · r₁₂",
    symbols: "ε₀ = 8.854 × 10⁻¹² C²/(N·m²), r₁₂ is position vector",
    notes: "Applies strictly to stationary point charges. In a medium with dielectric constant K, force decreases by factor K (F_med = F_vac / K).",
    tags: ["Electrostatics", "Vector", "High Yield"]
  },
  {
    id: "f-c12-phy-2",
    classLevel: "12",
    subject: "Physics",
    chapter: "Electric Charges and Fields",
    title: "Gauss's Law & Electric Flux",
    formula: "Φ = ∮ E · dA = q_enclosed / ε₀",
    symbols: "Φ = electric flux (N·m²/C), q_enclosed = net algebraic charge inside Gaussian surface",
    notes: "Flux through closed surface depends only on enclosed charges, independent of surface shape and external charges.",
    tags: ["Flux", "Gauss Law", "Derivation Base"]
  },
  {
    id: "f-c12-phy-3",
    classLevel: "12",
    subject: "Physics",
    chapter: "Electrostatic Potential & Capacitance",
    title: "Capacitance with Dielectric Slab",
    formula: "C = ε₀A / (d - t + t/K)",
    symbols: "A = plate area, d = plate separation, t = thickness of dielectric slab (t < d), K = dielectric constant",
    notes: "When dielectric completely fills the gap (t = d), capacitance becomes C = K·C₀.",
    tags: ["Capacitors", "Dielectrics"]
  },
  {
    id: "f-c12-phy-4",
    classLevel: "12",
    subject: "Physics",
    chapter: "Current Electricity",
    title: "Drift Velocity & Current Density",
    formula: "I = n·e·A·v_d  ==>  v_d = e·E·τ / m",
    symbols: "n = electron number density, e = 1.6 × 10⁻¹⁹ C, A = cross-section area, τ = relaxation time, m = electron mass",
    notes: "Drift velocity in metals is tiny (order of 10⁻⁴ m/s), yet electric impulses travel at near light speed via electromagnetic fields.",
    tags: ["Current", "Microscopic Transport"]
  },
  {
    id: "f-c12-phy-5",
    classLevel: "12",
    subject: "Physics",
    chapter: "Electromagnetic Induction & AC",
    title: "LCR Series Circuit Resonance & Impedance",
    formula: "Z = √[ R² + (X_L - X_C)² ] ;  ω₀ = 1 / √(L·C)",
    symbols: "X_L = ωL (inductive reactance), X_C = 1/(ωC) (capacitive reactance), Z = total impedance (Ω)",
    notes: "At resonance: X_L = X_C, Z_min = R, current is maximum, power factor cos Φ = 1 (purely resistive).",
    tags: ["AC Circuits", "Resonance"]
  },
  {
    id: "f-c12-phy-6",
    classLevel: "12",
    subject: "Physics",
    chapter: "Ray Optics",
    title: "Lens Maker's Formula",
    formula: "1 / f = (μ_lens / μ_med - 1) · (1/R₁ - 1/R₂)",
    symbols: "f = focal length, μ = refractive indices, R₁, R₂ = radii of curvature with Cartesian sign conventions",
    notes: "For equiconvex glass lens (μ = 1.5, R₁ = +R, R₂ = -R) in air: 1/f = (1.5 - 1)(2/R) = 1/R => f = R.",
    tags: ["Optics", "Lenses", "5-Mark Derivation"]
  },

  // Class 12 Chemistry
  {
    id: "f-c12-chem-1",
    classLevel: "12",
    subject: "Chemistry",
    chapter: "Solutions",
    title: "Colligative Properties & Van 't Hoff Factor",
    formula: "ΔT_b = i · K_b · m  ;  ΔT_f = i · K_f · m  ;  π = i · C · R · T",
    symbols: "i = Van 't Hoff factor, K_b = ebullioscopic constant, K_f = cryoscopic constant, m = molality (mol/kg)",
    notes: "For dissociation of electrolyte: i = 1 + (n - 1)α. For association: i = 1 + (1/n - 1)α.",
    tags: ["Solutions", "Colligative", "Numerical"]
  },
  {
    id: "f-c12-chem-2",
    classLevel: "12",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    title: "Nernst Equation at 298 K",
    formula: "E_cell = E°_cell - (0.0591 / n) · log₁₀ Q",
    symbols: "n = number of moles of electrons transferred, Q = reaction quotient = [Products]^p / [Reactants]^r",
    notes: "At equilibrium, E_cell = 0 and Q = K_c => E°_cell = (0.0591 / n) log₁₀ K_c. Also ΔG° = -nFE°_cell.",
    tags: ["Electrochemistry", "Thermodynamics", "Top Priority"]
  },
  {
    id: "f-c12-chem-3",
    classLevel: "12",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    title: "Arrhenius Activation Energy Equation",
    formula: "log₁₀(k₂ / k₁) = (E_a / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ]",
    symbols: "k = rate constants at Kelvin temperatures T₁ and T₂, E_a = activation energy (J/mol), R = 8.314 J/(mol·K)",
    notes: "Plot of ln k vs (1/T) yields a straight line with slope = -E_a / R and intercept = ln A.",
    tags: ["Kinetics", "Arrhenius", "Graph"]
  },

  // Class 12 Mathematics
  {
    id: "f-c12-math-1",
    classLevel: "12",
    subject: "Mathematics",
    chapter: "Integrals",
    title: "King's Definite Integral Property",
    formula: "∫[a to b] f(x) dx = ∫[a to b] f(a + b - x) dx",
    symbols: "Special case for limits [0, a]: ∫[0 to a] f(x) dx = ∫[0 to a] f(a - x) dx",
    notes: "Extremely powerful for trigonometric integrals involving sin x and cos x symmetry (e.g. ∫[0, π/2] (sin x / (sin x + cos x)) dx = π/4).",
    tags: ["Calculus", "Definite Integrals", "Essential Trick"]
  },
  {
    id: "f-c12-math-2",
    classLevel: "12",
    subject: "Mathematics",
    chapter: "Matrices and Determinants",
    title: "Adjoint and Matrix Inversion",
    formula: "A · adj(A) = adj(A) · A = |A| · Iₙ  ==>  A⁻¹ = (1 / |A|) · adj(A)",
    symbols: "|A| ≠ 0 (non-singular square matrix of order n), adj(A) = transpose of cofactor matrix",
    notes: "|adj(A)| = |A|^(n - 1) and |A · adj(A)| = |A|^n.",
    tags: ["Algebra", "Matrices", "Board Exam"]
  },
  {
    id: "f-c12-math-3",
    classLevel: "12",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    title: "Shortest Distance Between Skew Lines",
    formula: "d = | (b₁ × b₂) · (a₂ - a₁) | / | b₁ × b₂ |",
    symbols: "Lines r = a₁ + λb₁ and r = a₂ + μb₂. If lines intersect, distance d = 0.",
    notes: "Guaranteed 5-mark question in Class 12 CBSE Board examinations.",
    tags: ["3D Geometry", "Vectors", "5 Marks Guaranteed"]
  },

  // Class 11 Physics
  {
    id: "f-c11-phy-1",
    classLevel: "11",
    subject: "Physics",
    chapter: "Laws of Motion",
    title: "Banking of Curved Roads without Friction",
    formula: "tan θ = v² / (r · g)  ==>  v_optimum = √(r · g · tan θ)",
    symbols: "θ = banking angle, v = vehicle speed, r = curve radius, g = 9.8 m/s²",
    notes: "At optimum speed, horizontal component of normal reaction N sin θ alone supplies needed centripetal force without wearing tires.",
    tags: ["Mechanics", "Circular Motion"]
  },
  {
    id: "f-c11-phy-2",
    classLevel: "11",
    subject: "Physics",
    chapter: "Work, Energy and Power",
    title: "Work-Energy Theorem & Elastic Potential Energy",
    formula: "W_net = ΔK = K_final - K_initial  ;  U_spring = 1/2 · k · x²",
    symbols: "W_net = work done by all forces (conservative + non-conservative), k = spring constant (N/m), x = compression/extension",
    notes: "Holds true in all inertial reference frames for both constant and variable forces.",
    tags: ["Work Energy", "Springs"]
  },
  {
    id: "f-c11-phy-3",
    classLevel: "11",
    subject: "Physics",
    chapter: "Gravitation",
    title: "Escape Velocity from Planetary Body",
    formula: "v_e = √(2 · G · M / R) = √(2 · g · R)",
    symbols: "G = 6.674 × 10⁻¹¹ N·m²/kg², M = Earth mass (6 × 10²⁴ kg), R = Earth radius (6400 km)",
    notes: "For Earth, v_e ≈ 11.2 km/s. Escape velocity is completely independent of the mass or launch angle of the projected projectile.",
    tags: ["Gravitation", "Escape Speed"]
  }
];
