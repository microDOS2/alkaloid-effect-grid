/* ============================================================
   ALKALOID EFFECT GRID — DATA LAYER  (edit THIS file to update)
   ============================================================
   HOW TO UPDATE THE GRID:
   - Each entry below is one substance. Add, remove, or edit entries;
     the webpage and its filters update automatically on reload.
   - Fields:
     name     : substance (or alkaloid group)
     plant    : source plant (Latin binomial)
     region   : region of traditional use / origin
     alkaloid : "yes" = true alkaloid | "boundary" = alkaloid-like or
                alkaloid content unconfirmed | "no" = NOT an alkaloid
                (scope expanded 2026-09-19 to natural compounds; see chem)
     chem     : (only when alkaloid = "no") the actual compound class
     fx       : effect hits per classification —
                stim = Stimulation/Energy, mood = Mood Elevation,
                calm = Calm/Anxiety Reduction, enh = Enhanced Experience
                value "D" = DOCUMENTED (human trials/studies)
                      "C" = CLAIMED (traditional use / user reports)
                      "X" = DISPUTED (claimed, but human evidence negative)
                      null = no known effect in this class
     tier     : safety tier  1 = established safe | 2 = borderline,
                caveats | 3 = excluded (toxicity/addiction/legal)
     dep      : dependence liability: "none","low","moderate","high"
     interact : key drug-interaction risk ("—" if none notable)
     legal    : short legal status (US / EU) — VERIFY LOCALLY, changes fast
     note     : one-line evidence note
   ============================================================ */

const GRID_META = {
  title: "Natural Compound Effect Grid",
  compiled: "2026-09-19",
  classes: [
    { key: "stim", label: "Stimulation / Energy" },
    { key: "mood", label: "Mood Elevation" },
    { key: "calm", label: "Calm / Anxiety Relief" },
    { key: "enh",  label: "Enhanced Experience" }
  ]
};

const GRID_DATA = [
  // ---------- TIER 1 : established safe ----------
  { name:"Caffeine", plant:"Coffea arabica, Camellia sinensis, Paullinia cupana, Ilex paraguariensis", region:"Global", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:null,enh:null}, tier:1, dep:"low",
    interact:"CYP1A2 substrate; fluvoxamine raises levels", legal:"Legal worldwide; GRAS (US), EFSA ≤400 mg/day",
    note:"Gold standard: RCTs show vigor/alertness/mood at 50–300 mg; self-limiting inverted-U (irritability past ~500 mg)." },

  { name:"Theobromine", plant:"Theobroma cacao", region:"Global (Mesoamerican origin)", alkaloid:"yes",
    fx:{stim:"C",mood:"D",calm:null,enh:null}, tier:1, dep:"low",
    interact:"—", legal:"Legal; FEMA GRAS flavoring",
    note:"Subtle: positive affect only at ~250 mg isolated; dysphoric at 500–1000 mg (Baggott 2013, n=84). Chocolate effect ≠ isolated alkaloid." },

  { name:"Capsaicin", plant:"Capsicum annuum et al.", region:"Global (American origin)", alkaloid:"boundary",
    fx:{stim:null,mood:"D",calm:null,enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Legal food; GRAS",
    note:"Chili high: modest but real (SCAN 2025 n=45); endogenous-opioid mediated; extreme-dose harms only in challenge formats. Technically a capsaicinoid amide." },

  { name:"Protopine / allocryptopine", plant:"Eschscholzia californica (California poppy)", region:"W. North America", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"CYP3A4/2C9 inhibition (mild)", legal:"Legal supplement US/EU; EMA traditional use",
    note:"Weak-documented: one positive RCT (n=264, combination product); very low toxicity." },

  { name:"Harman / norharman (β-carbolines)", plant:"Passiflora incarnata (passionflower)", region:"Americas", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:"C"}, tier:1, dep:"none",
    interact:"Theoretical MAOI additivity", legal:"Legal; food-grade herb",
    note:"Plant-level anxiolysis documented (RCT ≈ oxazepam); alkaloid-vs-flavonoid attribution disputed — alkaloid-level evidence is claimed." },

  { name:"Sanjoinine A (frangufoline)", plant:"Ziziphus jujuba var. spinosa (suan zao ren)", region:"China/E. Asia", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Legal; food-grade",
    note:"GABAergic anxiolytic/hypnotic in animals; human RCTs only for multi-herb formulas. Food-grade safety." },

  { name:"Trigonelline", plant:"Coffea spp., Trigonella foenum-graecum", region:"Global", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:null,enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Legal; dietary",
    note:"Safe (2023 formal risk assessment) NAD+ precursor — but no psychoactive effect in humans. Included as the control case: safe ≠ felt." },

  // ---------- TIER 2 : borderline, caveats ----------
  { name:"Paraxanthine", plant:"Coffea/Camellia (caffeine metabolite; supplemental)", region:"—", alkaloid:"yes",
    fx:{stim:"D",mood:"C",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Caffeine-class", legal:"Self-affirmed GRAS (US, 2021)",
    note:"3 small industry-funded RCTs (n=12–13, ≤7 days) show attention benefits; no independent replication; raises striatal dopamine in rats unlike caffeine." },

  { name:"Theacrine", plant:"Camellia assamica var. kucha", region:"Yunnan, China", alkaloid:"yes",
    fx:{stim:"D",mood:"C",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Caffeine-class", legal:"Legal supplement (US); EU novel-food status unsettled",
    note:"Small (partly industry-linked) human trials: energy without tolerance signal at ≤300 mg; long-term data thin." },

  { name:"Methylliberine (Dynamine)", plant:"Camellia kucha, Coffea spp.", region:"China", alkaloid:"yes",
    fx:{stim:"D",mood:"C",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Caffeine-class", legal:"Self-affirmed GRAS (US)",
    note:"Small RCTs: no HR/BP effect at 100 mg; mood claims vendor-driven; long-term data absent." },

  { name:"Mesembrine / mesembrenone (kanna)", plant:"Sceletium tortuosum", region:"South Africa (Khoi/San)", alkaloid:"yes",
    fx:{stim:null,mood:"D",calm:"D",enh:"C"}, tier:2, dep:"low",
    interact:"Serotonergic: SSRI/SNRI/MAOI/tramadol contraindicated", legal:"Unscheduled US; EU novel-food authorization proposed Nov 2025 (25 mg/day)",
    note:"Best-documented traditional mood alkaloid — but 2023 meta-analysis (4 RCTs, n=117) found no anxiety benefit vs placebo. All positive trials tied to one proprietary extract." },

  { name:"Mitragynine (kratom leaf)", plant:"Mitragyna speciosa", region:"Southeast Asia", alkaloid:"yes",
    fx:{stim:"D",mood:"C",calm:"C",enh:null}, tier:2, dep:"moderate",
    interact:"CYP3A4/2D6; opioid/sedative additivity", legal:"US: unscheduled but FDA-deemed unlawful in supplements; ~24 states regulate, several ban; banned in parts of EU",
    note:"Low-dose stimulant, high-dose opioid-like. Survey benefits (pain 91%, n=2798) but zero efficacy RCTs; dependence/withdrawal documented. Leaf vs concentrate distinction is decisive." },

  { name:"Galantamine", plant:"Galanthus spp. (snowdrop)", region:"Europe/Caucasus", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:null,enh:"D"}, tier:2, dep:"none",
    interact:"Cholinergic; bradycardia caution", legal:"Prescription drug (US/EU); supplement status contested",
    note:"Lucid dreaming RCT (LaBerge 2018, n=121): 42% vs 14% placebo at 8 mg; dose-dependent. Genuine enhanced-experience evidence, drug-status caveat." },

  { name:"Huperzine A", plant:"Huperzia serrata (club moss)", region:"China", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:null,enh:"C"}, tier:2, dep:"none",
    interact:"Cholinergic additivity", legal:"Legal supplement (US)",
    note:"Acceptable short-term safety (≤200 µg/day); cognitive agent — dream/enhancement claims mechanistic extrapolation, no human subjective-effect trials." },

  { name:"Erythravine (mulungu)", plant:"Erythrina mulungu", region:"Brazil/Amazon", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"D",enh:null}, tier:2, dep:"none",
    interact:"CNS-depressant additivity; hypotension", legal:"Legal supplement US/EU",
    note:"Anxiolysis mixed: one positive small human crossover, one null. Diazepam-like in rodents. Embryo-fetal toxicity signal in rats — avoid in pregnancy." },

  { name:"Rhynchophylline / isorhynchophylline", plant:"Uncaria rhynchophylla (gou teng)", region:"China/E. Asia", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Hypotension additivity", legal:"Legal; TCM herb",
    note:"Rodent antidepressant/anxiolytic via MAO/5-HT1A; no human trials for subjective effects." },

  { name:"Neferine / liensinine", plant:"Nelumbo nucifera embryo (lotus plumule)", region:"Asia", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Cardiac ion-channel effects (in vitro)", legal:"Legal food/herb",
    note:"Animal sedation/antidepressant-like effects ≈ imipramine in forced swim; zero human trials. Food-safe history." },

  { name:"Sinomenine", plant:"Sinomenium acutum", region:"China/Japan", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:null}, tier:2, dep:"low",
    interact:"Histamine-release reactions", legal:"Prescription drug in China; supplement elsewhere",
    note:"Multiple mouse depression models (BDNF); no human mood trials; documented histamine-release reactions." },

  { name:"Tetrahydropalmatine (l-THP, rotundine)", plant:"Corydalis yanhusuo", region:"China", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:"D",enh:null}, tier:2, dep:"low",
    interact:"Sedative additivity; rare hepatotoxicity", legal:"Drug in Chinese pharmacopoeia since 1977; unscheduled US",
    note:"Documented for tension insomnia (D1/D2 antagonist + GABA-A) — but anti-reward pharmacology means mood-lift marketing is misplaced. Rare hepatotoxicity case reports." },

  { name:"Leonurine", plant:"Leonurus cardiaca (motherwort)", region:"Europe/Asia", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Uterotonic — avoid in pregnancy", legal:"Legal herb",
    note:"Uncontrolled human pilot on herb positive; alkaloid-level data animal-only. Otherwise low toxicity." },

  { name:"Akuammine group", plant:"Picralima nitida (akuamma)", region:"West Africa", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:null}, tier:2, dep:"low",
    interact:"Weak opioidergic — dependence caution", legal:"Unscheduled US; legal",
    note:"Traditional analgesic/calming use; vendor-driven euphoria claims; no human trials. µ/κ-opioid activity warrants caution." },

  { name:"Mitraphylline / mitrajavine", plant:"Mitragyna hirsuta, M. javanica", region:"Southeast Asia", alkaloid:"yes",
    fx:{stim:"C",mood:"C",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Minimal data", legal:"Legal where kratom banned (gray zone)",
    note:"Vendor-claimed 'kratom-lite' mood/stimulation; presumed milder; almost no human data." },

  { name:"Cytisine", plant:"Cytisus laburnum, Sophora spp.", region:"Europe/Asia", alkaloid:"yes",
    fx:{stim:"C",mood:"C",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Nicotinic; plant toxic in overdose", legal:"OTC cessation drug E. Europe/UK/Canada; not FDA-approved",
    note:"Strong rodent antidepressant data; human use is smoking cessation only — mood/energy claims are extrapolation." },

  { name:"Synephrine", plant:"Citrus aurantium (bitter orange)", region:"Mediterranean/Asia", alkaloid:"yes",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:2, dep:"none",
    interact:"Caution combined with caffeine", legal:"Legal supplement; ANSES cap <20 mg/day",
    note:"~30 human studies: no stimulant effect at ≤100 mg/day — the marketed 'energy' effect is disputed; chronic use raises BP ~+6/+4 mmHg (2022 meta)." },

  { name:"Yohimbine", plant:"Pausinystalia johimbe", region:"West/Central Africa", alkaloid:"yes",
    fx:{stim:"C",mood:"X",calm:null,enh:null}, tier:2, dep:"low",
    interact:"Hypertension; MAOI/stimulant danger", legal:"Rx-only UK/Canada/Australia; chaotic US supplements (0–12.1 mg/serving)",
    note:"Alpha-2 antagonist; effective for ED but a standard laboratory panicogen (~60% panic rate in PTSD challenge). Documented fatal overdoses." },

  { name:"Nuciferine (lotus leaf)", plant:"Nelumbo nucifera leaf", region:"Asia", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"C",enh:"C"}, tier:2, dep:"none",
    interact:"Dopaminergic", legal:"Legal herb (Chinese pharmacopoeia); blue lotus DoD-prohibited",
    note:"Traditional 'calming the mind' use + preclinical GABA-A anxiolysis — but aripiprazole-like profile and adverse US military case series (concentrated/vaped products) keep heavy caveats." },

  { name:"Calea zacatechichi actives", plant:"Calea zacatechichi (Mexican dream herb)", region:"Mexico (Chontal)", alkaloid:"boundary",
    fx:{stim:null,mood:null,calm:"C",enh:"D"}, tier:2, dep:"none",
    interact:"Hypoglycemic/hypotensive additivity", legal:"Uncontrolled US/EU",
    note:"One small double-blind human study (Mayagoitia 1986) supports dream enhancement. Actives are sesquiterpene lactones; the reported alkaloid was never characterized — boundary entry." },

  { name:"Silene capensis β-carbolines", plant:"Silene capensis/undulata (African dream root)", region:"South Africa (Xhosa)", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:null,enh:"C"}, tier:2, dep:"none",
    interact:"Emetic saponins; avoid pregnancy", legal:"Uncontrolled",
    note:"Ethnographic oneirogen; 2024 LC-MS/MS detected β-carbolines + 5-HT2A docking — in silico only, no human trials." },

  { name:"Entada rheedii actives", plant:"Entada rheedii (African dream bean)", region:"Pan-tropical Africa", alkaloid:"boundary",
    fx:{stim:null,mood:null,calm:null,enh:"C"}, tier:2, dep:"none",
    interact:"Raw seed GI toxicity if unleached", legal:"Uncontrolled",
    note:"Traditional dream-enhancing use; tryptophan-derivative chemistry, alkaloid status unclear — boundary entry." },

  { name:"Blue lotus aporphine fraction", plant:"Nymphaea caerulea", region:"Egypt", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:"C"}, tier:2, dep:"low",
    interact:"Dopaminergic/sedative", legal:"Unscheduled US except Louisiana; DoD-prohibited",
    note:"Military case series shows real CNS activity (agitation, tachycardia as adverse events); traditional calming use; no controlled human data." },

  { name:"Berberine", plant:"Berberis spp., Coptis chinensis", region:"Asia/Global", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:null,enh:null}, tier:2, dep:"none",
    interact:"CYP3A4/2D6 inhibitor", legal:"Legal supplement",
    note:"Mood signal is one IBS-D RCT's depression/anxiety subscales — likely secondary to GI relief. Metabolic agent, not a feel-good agent." },

  // ---------- TIER 3 : excluded (educational) ----------
  { name:"Nicotine", plant:"Nicotiana tabacum", region:"Americas/Global", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:"C",enh:null}, tier:3, dep:"high",
    interact:"—", legal:"Legal adult product worldwide; heavily regulated",
    note:"Fails on addiction, not acute toxicity: highest dependence capture rate (~32%); delivery format kills 8M/yr globally." },

  { name:"Ephedrine", plant:"Ephedra sinica (ma huang)", region:"China/Global", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:null,enh:null}, tier:3, dep:"moderate",
    interact:"Cardiovascular stimulant additivity", legal:"Supplements banned US (2004); drug behind-counter",
    note:"~155 deaths led to FDA ban; <1% of supplement sales caused 64% of serious supplement adverse events." },

  { name:"Cocaine", plant:"Erythroxylum coca", region:"Andes/Global", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:null,enh:null}, tier:3, dep:"high",
    interact:"Cardiotoxic; MI risk ×23.7 first hour", legal:"Schedule II US; UN 1961 Schedule I",
    note:"Intense euphoria inseparable from cardiotoxicity; 29,449 US overdose deaths 2023." },

  { name:"Morphine / opium alkaloids", plant:"Papaver somniferum", region:"SW Asia/Global", alkaloid:"yes",
    fx:{stim:null,mood:"D",calm:"D",enh:null}, tier:3, dep:"high",
    interact:"Respiratory depression with sedatives", legal:"Schedule II US (essential medicine); heroin Schedule I",
    note:"Euphoria and lethal respiratory depression are the same mechanism; 81,083 opioid-involved US deaths 2023." },

  { name:"Arecoline", plant:"Areca catechu (betel nut)", region:"S/SE Asia; ~600M users", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:null,enh:null}, tier:3, dep:"high",
    interact:"—", legal:"Unregulated most countries (Turkey: narcotic)",
    note:"IARC Group 1 carcinogen; pooled oral-cancer RR 7.9; true dependence syndrome. The template case of positive effect + catastrophic safety failure." },

  { name:"Cathinone / cathine (khat)", plant:"Catha edulis", region:"E. Africa/Arabian Peninsula", alkaloid:"yes",
    fx:{stim:"D",mood:"D",calm:null,enh:null}, tier:3, dep:"moderate",
    interact:"Amphetamine-class cardiovascular", legal:"Schedule I US (cathinone); banned UK/most EU",
    note:"Documented euphoria/energy in human studies; dependence and cardiac/psychiatric harms; cathine Schedule IV." },

  { name:"7-Hydroxymitragynine (concentrated)", plant:"Mitragyna speciosa (semi-synthetic concentrates)", region:"—", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:"C",enh:null}, tier:3, dep:"high",
    interact:"Opioid-class respiratory depression", legal:"FDA recommended Schedule I Jul 2025; DEA orders pending 2026",
    note:"13× morphine functional potency; naloxone-reversible respiratory depression in rats; poison-center coma/ICU cases since Feb 2025. The concentration hazard case." },

  { name:"Strychnine", plant:"Strychnos nux-vomica", region:"India/SE Asia", alkaloid:"yes",
    fx:{stim:"D",mood:null,calm:null,enh:null}, tier:3, dep:"none",
    interact:"—", legal:"Restricted poison",
    note:"Documented CNS-stimulant pharmacology and historical tonic use — but a lethal convulsant with a razor-thin margin. Included as the extreme counter-example." },

  { name:"Higenamine", plant:"Nandina, Nelumbo, Aconitum", region:"E. Asia", alkaloid:"yes",
    fx:{stim:"D",mood:"C",calm:null,enh:null}, tier:3, dep:"none",
    interact:"β2-agonist tachycardia", legal:"FDA: not a lawful supplement ingredient; WADA-banned",
    note:"Real β2 pharmacology; 'feel-good stimulant' claims vendor-only; cardiovascular harms documented." },

  { name:"Lobeline", plant:"Lobelia inflata", region:"North America", alkaloid:"yes",
    fx:{stim:"C",mood:"X",calm:null,enh:null}, tier:3, dep:"low",
    interact:"Emetic; narrow margin", legal:"Legal herb; FDA banned cessation products 1993",
    note:"Nicotinic pharmacology documented, but human cessation/mood trials negative and margin is narrow — disputed claims." },

  { name:"Ibogaine", plant:"Tabernanthe iboga", region:"W. Central Africa", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:null,enh:"D"}, tier:3, dep:"none",
    interact:"hERG/QT prolongation — torsades", legal:"Schedule I US",
    note:"≥33 publicly reported deaths incl. at therapeutic doses without cardiac history; NIDA abandoned research over cardiotoxicity." },

  { name:"Psilocybin / psilocin", plant:"Psilocybe spp.", region:"Global", alkaloid:"yes",
    fx:{stim:null,mood:"D",calm:null,enh:"D"}, tier:3, dep:"none",
    interact:"Serotonergic", legal:"Schedule I US; carve-outs OR/CO, Australia 2023",
    note:"Physiologically very safe but psychological risk real: 39% rate worst trip top-5 most challenging; 7.6% sought treatment for lasting symptoms (Carbonaro 2016). Most contestable exclusion." },

  { name:"Mescaline", plant:"Lophophora williamsii, Trichocereus spp.", region:"N. America/Andes", alkaloid:"yes",
    fx:{stim:null,mood:"C",calm:null,enh:"D"}, tier:3, dep:"none",
    interact:"Serotonergic", legal:"Schedule I US (AIRFA tribal exemption)",
    note:"No documented addiction; intoxications generally mild — excluded on psychosis/panic risk, adulteration, and Schedule I status." },

  { name:"DMT / 5-MeO-DMT", plant:"Psychotria/Anadenanthera/Virola spp.", region:"Amazon/Global", alkaloid:"yes",
    fx:{stim:null,mood:"D",calm:null,enh:"D"}, tier:3, dep:"none",
    interact:"Harmala MAOIs → serotonin syndrome risk", legal:"Schedule I US (UDV/Gospel exemptions)",
    note:"5-MeO-DMT observational mood improvement documented; ayahuasca MAOI combinations add interaction hazards." },

  { name:"Harmine / harmaline", plant:"Banisteriopsis caapi, Peganum harmala", region:"Amazon/Middle East", alkaloid:"yes",
    fx:{stim:null,mood:"D",calm:null,enh:"C"}, tier:3, dep:"none",
    interact:"Reversible MAO-A inhibitor: tyramine/SSRI danger", legal:"Unscheduled plants US; DMT admixtures Schedule I",
    note:"Ayahuasca RCTs show real antidepressant effects — defeated by serotonin-syndrome risk, narrow dosing margin, abortifacient properties." },

  { name:"Ergine / LSA", plant:"Ipomoea tricolor, Turbina corymbosa, Argyreia nervosa", region:"Mesoamerica", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:null,enh:"C"}, tier:3, dep:"none",
    interact:"Vasoconstriction", legal:"Schedule III US; seeds legal to possess",
    note:"Psychoactive documented but euphoria inconsistent — dysphoria/nausea common. Fails mood class on balance." },

  { name:"Bufotenine", plant:"Anadenanthera spp. (yopo/vilca)", region:"South America", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:null,enh:"X"}, tier:3, dep:"none",
    interact:"Dangerous parenterally", legal:"Schedule I US",
    note:"Human IV studies unpleasant; intranasal null (Isbell) — snuff effects likely attributable to DMT/5-MeO-DMT. Disputed on both classes." },

  { name:"Cryogenine / vertine (sinicuichi)", plant:"Heimia salicifolia", region:"Mexico", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:null,enh:"X"}, tier:3, dep:"none",
    interact:"Anticholinergic burden", legal:"Uncontrolled",
    note:"Isolated-alkaloid human experiments negative (Malone & Rother 1994) — famed auditory effects failed replication; chronic-use memory impairment reported." },

  { name:"Reserpine", plant:"Rauvolfia serpentina", region:"S. Asia", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:"D",enh:null}, tier:3, dep:"none",
    interact:"Depressogenic", legal:"Prescription; largely withdrawn",
    note:"The negative control: documented sedation but causes depression/suicidality via monoamine depletion — calm ≠ positive." },

  { name:"Gelsemine", plant:"Gelsemium sempervirens", region:"SE United States", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:3, dep:"none",
    interact:"—", legal:"Homeopathic dilutions legal; herb toxic",
    note:"Animal anxiolysis claims but lethal narrow margin (LD50 0.2 mg/kg class) — excluded on toxicity." },

  { name:"Chelidonine", plant:"Chelidonium majus (greater celandine)", region:"Europe/Asia", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:3, dep:"none",
    interact:"Hepatotoxicity", legal:"EMA negative assessment",
    note:"Claimed sedative; documented hepatotoxicity — excluded." },

  { name:"Voacangine / voacamine", plant:"Voacanga africana", region:"West Africa", alkaloid:"yes",
    fx:{stim:"C",mood:"C",calm:null,enh:"C"}, tier:3, dep:"none",
    interact:"MAOI interaction risk; hERG/QT class concern", legal:"Unscheduled US; precursor-monitored",
    note:"Traditional stimulant/visionary use; iboga-class cardiotoxicity concern; poorly characterized." },

  { name:"Vinpocetine", plant:"Vinca minor (semi-synthetic)", region:"Europe", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:null,enh:null}, tier:3, dep:"none",
    interact:"hERG liability; reproductive warning", legal:"FDA 2019 pregnancy warning; non-dietary-ingredient status",
    note:"No subjective drug effects in healthy volunteers (Subhan & Hindmarch 1985) — fails both prongs." },

  { name:"Evodiamine / rutaecarpine", plant:"Tetradium ruticarpum (Evodia)", region:"China", alkaloid:"yes",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:3, dep:"none",
    interact:"Rutaecarpine CYP1A2 inducer (−75% caffeine AUC)", legal:"Gray-zone supplement",
    note:"Stimulant/thermogenic marketing rests on rodent data; documented hepato-/cardiotoxicity signals." },

  { name:"Hordenine", plant:"Hordeum vulgare (barley), beer", region:"Global", alkaloid:"yes",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:3, dep:"none",
    interact:"MAO substrate", legal:"FDA: supplements adulterated; DoD/NCAA prohibited",
    note:"Mechanism-hype anatomy: in vitro D2 Ki 13 µM vs human beer plasma 12–17 nM — 1000× too low. 1894 self-experiment: no effect." },

  { name:"Tyramine", plant:"Fermented/aged foods", region:"Global", alkaloid:"yes",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:3, dep:"none",
    interact:"MAOI 'cheese effect' — hypertensive crisis", legal:"Legal dietary component",
    note:"Pure pressor amine; no positive subjective effects; dangerous with MAOIs." },

  { name:"Conessine", plant:"Holarrhena pubescens (kurchi)", region:"India", alkaloid:"yes",
    fx:{stim:null,mood:null,calm:null,enh:"X"}, tier:3, dep:"none",
    interact:"CNS/cardiac depressant", legal:"Not marketed",
    note:"Cardiotoxic; causes vertigo/tremors/agitation — no positive subjective effects. Screened and rejected." },

  { name:"Piperine", plant:"Piper nigrum (black pepper)", region:"Global (Indian origin)", alkaloid:"yes",
    fx:{stim:null,mood:"X",calm:null,enh:null}, tier:1, dep:"none",
    interact:"CYP3A4/P-gp inhibitor: carbamazepine +47%, midazolam +20%", legal:"Legal food; EU 2024 priority-list review",
    note:"Safe at culinary/supplemental doses, but human mood evidence is null (BJN 2014 RCT) — plasma levels 100–1000× below in vitro potencies. Interaction liability is the real hazard." },

  { name:"Theophylline", plant:"Camellia sinensis (trace)", region:"Global", alkaloid:"yes",
    fx:{stim:"D",mood:null,calm:null,enh:null}, tier:3, dep:"low",
    interact:"Narrow therapeutic index 10–20 µg/mL", legal:"Prescription drug",
    note:"Tea trace exposure is inert; pharmaceutical dosing is toxic — fails the casual-consumption criterion." },

  // ---------- NON-ALKALOID EXPANSION (scope widened 2026-09-19) ----------
  // --- Functional fungi ---
  { name:"Cordycepin", plant:"Cordyceps militaris / sinensis", region:"Tibet/China", alkaloid:"no", chem:"nucleoside",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:2, dep:"none",
    interact:"Wild C. sinensis arsenic 4.4–16 mg/kg", legal:"DSHEA supplement US; C. militaris unauthorized novel food EU",
    note:"The energy claim is null in every athlete RCT (Parcell 2004; Earnest 2004); the 1993 runners origin story is a documented doping cover-up. Weeks-scale threshold gains only in elderly/untrained." },

  { name:"Hericenones / erinacines (lion's mane)", plant:"Hericium erinaceus", region:"E. Asia/Global", alkaloid:"no", chem:"diterpene",
    fx:{stim:null,mood:"D",calm:null,enh:"X"}, tier:1, dep:"none",
    interact:"Theoretical antiplatelet", legal:"Legal US/EU (fruiting body/water extract)",
    note:"Weeks-scale mood benefit in small RCTs (Nagano 2010; Vigna 2019, pro-BDNF); acute felt nootropic effect disputed (Henn 2025 null). Cleanest safety record in the fungi category." },

  { name:"Ganoderic acids (reishi)", plant:"Ganoderma lucidum", region:"E. Asia", alkaloid:"no", chem:"triterpene",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:2, dep:"none",
    interact:"Hepatotoxicity case reports incl. 1 fatal (crude powder + alcohol)", legal:"Legal US/EU",
    note:"One neurasthenia RCT: wellbeing +38.7% vs +29.7% placebo (p=0.002, 8 wk). Acute calm is claimed only (in vitro GABA-A)." },

  { name:"Chaga actives (betulinic acid, melanins)", plant:"Inonotus obliquus", region:"Boreal forests", alkaloid:"no", chem:"triterpene/polysaccharide",
    fx:{stim:null,mood:null,calm:null,enh:null}, tier:3, dep:"none",
    interact:"Oxalate load; avoid with kidney disease", legal:"Legal US; EU novel-food gray zone",
    note:"Zero human subjective-effect trials — and the worst safety profile here: 6+ oxalate-nephropathy cases, 2 permanent ESRD." },

  // --- Botanical calm/mood ---
  { name:"Kavalactones", plant:"Piper methysticum (kava)", region:"Pacific Islands", alkaloid:"no", chem:"kavalactone",
    fx:{stim:null,mood:"C",calm:"D",enh:null}, tier:2, dep:"low",
    interact:"Sedative additivity; hepatotoxicity debate", legal:"Legal US; patchwork EU (German bans overturned 2015/2024)",
    note:"Cochrane-positive anxiolysis (tempered by Sarris 2020 null Phase III). WHO/FAO 2016: aqueous noble-root preparations low-risk. The strongest non-alkaloid calm agent." },

  { name:"Crocin / safranal", plant:"Crocus sativus (saffron)", region:"SW Asia/Mediterranean", alkaloid:"no", chem:"carotenoid/monoterpene",
    fx:{stim:null,mood:"D",calm:"C",enh:null}, tier:1, dep:"none",
    interact:"Toxic ≥5 g; abortifacient at high dose", legal:"Legal food/supplement US & EU (GRAS)",
    note:"Multiple meta-analyses: antidepressant effect ≈ fluoxetine/imipramine at 30 mg/day. Among the best-evidenced mood botanicals of any chemistry." },

  { name:"Linalool (Silexan)", plant:"Lavandula angustifolia (lavender)", region:"Mediterranean", alkaloid:"no", chem:"monoterpene",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Approved drug in Germany (Lasea); supplement US",
    note:"5-RCT meta-analysis (n=1,320): oral lavender oil ≈ lorazepam 0.5 mg and paroxetine 20 mg in GAD — non-sedating, no dependence, exceptionally clean." },

  { name:"Valerenic acid", plant:"Valeriana officinalis (valerian)", region:"Europe/Asia", alkaloid:"no", chem:"sesquiterpene acid",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"Additive sedation", legal:"Legal US & EU (HMPC monograph)",
    note:"Documented for sleep; anxiety evidence mixed. Very safe across ages 7–80." },

  { name:"Withanolides (ashwagandha)", plant:"Withania somnifera", region:"India (Ayurveda)", alkaloid:"no", chem:"steroidal lactone",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:2, dep:"none",
    interact:"Liver-injury case series (26+ patients); thyroid caution", legal:"Legal US; banned Denmark 2023; EU Article 8 review",
    note:"Anxiolysis documented but low-certainty; safety story deteriorating 2023–2026 with growing hepatotoxicity reports and regulatory escalation." },

  { name:"Rosavins / salidroside (rhodiola)", plant:"Rhodiola rosea", region:"Arctic/Altai", alkaloid:"no", chem:"phenylpropanoid glycoside",
    fx:{stim:"D",mood:"C",calm:null,enh:null}, tier:1, dep:"none",
    interact:"Mild activation", legal:"Legal US & EU",
    note:"Anti-fatigue documented in RCTs (stress/exam fatigue); mood claims weaker. Well tolerated." },

  { name:"Rosmarinic acid (lemon balm)", plant:"Melissa officinalis", region:"Mediterranean", alkaloid:"no", chem:"phenolic acid",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"Theoretical thyroid caution", legal:"Legal US & EU",
    note:"Meta-analysis SMD −0.98 for anxiety; acute calm at 600 mg in RCTs. Safe." },

  { name:"Apigenin (chamomile)", plant:"Matricaria chamomilla", region:"Europe/W. Asia", alkaloid:"no", chem:"flavonoid",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"Rare Asteraceae allergy", legal:"Legal US & EU",
    note:"GAD RCTs positive including relapse prevention; very safe." },

  { name:"Xanthohumol / bitter acids (hops)", plant:"Humulus lupulus", region:"Global", alkaloid:"no", chem:"prenylflavonoid",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:1, dep:"none",
    interact:"Phytoestrogen caution", legal:"Legal US & EU",
    note:"One crossover pilot RCT for calm; otherwise traditional/beer-context evidence." },

  { name:"Ursolic acid / eugenol (holy basil)", plant:"Ocimum tenuiflorum", region:"India (Ayurveda)", alkaloid:"no", chem:"triterpene/phenylpropene",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:1, dep:"none",
    interact:"Pregnancy caution", legal:"Legal US & EU",
    note:"Two positive small RCTs for stress; otherwise traditional." },

  { name:"Asiaticoside / madecassoside (gotu kola)", plant:"Centella asiatica", region:"S/SE Asia", alkaloid:"no", chem:"triterpene saponin",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Rare hepatotoxicity (LiverTox)", legal:"Legal US & EU",
    note:"Startle-response RCT plus small/uncontrolled trials; modest evidence." },

  { name:"Bacosides (bacopa)", plant:"Bacopa monnieri", region:"India (Ayurveda)", alkaloid:"no", chem:"saponin",
    fx:{stim:null,mood:null,calm:"C",enh:"D"}, tier:1, dep:"none",
    interact:"GI upset", legal:"Legal US & EU",
    note:"Documented memory/cognition effects (weeks-scale); calm claimed. An 'enhancement' agent, not a felt-mood agent." },

  { name:"Honokiol / magnolol (magnolia bark)", plant:"Magnolia officinalis", region:"China/Japan", alkaloid:"no", chem:"neolignan",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Sedating; CNS-depressant additivity", legal:"Legal supplement US/EU (extract-dependent)",
    note:"GABA-A mechanism solid in animals; human data are vendor-funded blends (Relora) — standalone evidence absent." },

  { name:"Hyperforin / hypericin (St John's Wort)", plant:"Hypericum perforatum", region:"Europe", alkaloid:"no", chem:"phloroglucinol/naphthodianthrone",
    fx:{stim:null,mood:"D",calm:null,enh:null}, tier:2, dep:"none",
    interact:"Potent CYP3A4/P-gp induction: contraceptive failure, transplant rejection, serotonin syndrome", legal:"Supplement US; regulated herbal medicine EU",
    note:"Documented for mild-moderate depression (not major). The dominant interaction hazard on this entire grid." },

  { name:"Damiana actives", plant:"Turnera diffusa", region:"Mexico/Central America", alkaloid:"no", chem:"flavonoid/terpenoid",
    fx:{stim:null,mood:"X",calm:"C",enh:null}, tier:2, dep:"none",
    interact:"High-dose convulsion case report", legal:"Legal US (banned Louisiana)/EU",
    note:"No standalone human trials; mood claims vendor-only; only data is a 6-ingredient combo trial." },

  // --- Amino acids / dietary ---
  { name:"L-Theanine", plant:"Camellia sinensis (tea)", region:"E. Asia/Global", alkaloid:"no", chem:"amino acid",
    fx:{stim:null,mood:null,calm:"D",enh:"D"}, tier:1, dep:"none",
    interact:"Blunts caffeine BP spike (synergy)", legal:"GRAS US; supplement EU",
    note:"Documented 'alert calm' — relaxed without sedation, and the caffeine+theanine combination (40 mg + caffeine) outperforms either alone for focused attention. Very clean ≤400 mg/day." },

  { name:"5-HTP", plant:"Griffonia simplicifolia", region:"West Africa", alkaloid:"no", chem:"amino-acid metabolite",
    fx:{stim:null,mood:"D",calm:"C",enh:null}, tier:2, dep:"none",
    interact:"Serotonin syndrome with SSRIs/MAOIs (case reports)", legal:"Supplement US; medicinal in parts of EU; EFSA rejected claims",
    note:"Mood evidence real but low-quality; the interaction risk is the dominant caveat." },

  { name:"L-DOPA (Mucuna)", plant:"Mucuna pruriens (velvet bean)", region:"India/Africa", alkaloid:"no", chem:"amino acid",
    fx:{stim:null,mood:"C",calm:null,enh:"C"}, tier:2, dep:"low",
    interact:"Levodopa-class: nausea, dyskinesia, psychosis at dose", legal:"Supplement US; variable dosing",
    note:"Documented dopaminergic effects in Parkinson's; healthy-user mood/libido claims largely extrapolated. Dopamine-dysregulation case from supplement use exists." },

  { name:"Oral GABA", plant:"fermentation / synthetic-identical", region:"—", alkaloid:"no", chem:"amino acid",
    fx:{stim:null,mood:null,calm:"X",enh:null}, tier:1, dep:"none",
    interact:"BP dip", legal:"Supplement US; medicinal in Finland",
    note:"The debunk case: blood-brain-barrier crossing never demonstrated in humans (efflux 17× influx). 'Natural benzo' marketing is disputed." },

  { name:"L-Tyrosine", plant:"dietary / fermentation", region:"—", alkaloid:"no", chem:"amino acid",
    fx:{stim:"C",mood:null,calm:null,enh:"D"}, tier:1, dep:"none",
    interact:"MAOI/thyroid caution", legal:"Legal supplement",
    note:"Documented context-dependent rescue: cognition under cold/sleep-loss stress (catecholamine depletion). Does little when rested." },

  { name:"Taurine", plant:"meat/fish / synthetic", region:"—", alkaloid:"no", chem:"amino sulfonic acid",
    fx:{stim:"X",mood:null,calm:null,enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Legal; energy-drink staple",
    note:"All 'energy' data come from caffeine combinations; taurine-alone trial actually reduced vigor. Very safe." },

  { name:"Glycine", plant:"dietary / synthetic", region:"—", alkaloid:"no", chem:"amino acid",
    fx:{stim:null,mood:null,calm:"D",enh:null}, tier:1, dep:"none",
    interact:"—", legal:"Legal supplement",
    note:"3 g pre-bed: PSG-confirmed reduced sleep-onset latency (small, Ajinomoto-linked trials). Excellent safety." },

  { name:"SAMe", plant:"fermentation-derived", region:"—", alkaloid:"no", chem:"methionine derivative",
    fx:{stim:null,mood:"D",calm:null,enh:null}, tier:2, dep:"none",
    interact:"Mania induction risk; serotonergic caution", legal:"Supplement US; Rx drug in parts of EU",
    note:"Meta-analysis (N=2,183): SMD −0.58 vs placebo, comparable to TCAs. Real mood evidence, real mania caveat." },

  { name:"Creatine", plant:"meat / synthetic", region:"—", alkaloid:"no", chem:"guanidine",
    fx:{stim:null,mood:"C",calm:null,enh:"D"}, tier:1, dep:"none",
    interact:"Creatinine lab artifact", legal:"Legal supplement",
    note:"Memory under demand (SMD 0.31); 52% vs 26% remission as antidepressant adjunct in one women's RCT. Safe." },

  { name:"L-Tryptophan", plant:"fermentation", region:"—", alkaloid:"no", chem:"amino acid",
    fx:{stim:null,mood:"D",calm:"D",enh:null}, tier:2, dep:"none",
    interact:"Serotonergic; 1989 EMS contamination disaster (1,510 cases, 38 deaths)", legal:"Supplement US (banned 1989–2001)",
    note:"Modest documented mood and sleep effects (≥1 g ↓ wake-after-onset). Safety history is a manufacturing lesson, not molecule toxicity." },

  { name:"Phenibut", plant:"synthetic GABA analog", region:"—", alkaloid:"no", chem:"synthetic GABA-B agonist",
    fx:{stim:null,mood:"C",calm:"D",enh:null}, tier:3, dep:"high",
    interact:"Severe withdrawal; CNS-depressant additivity", legal:"FDA: not a dietary ingredient (misbranded); banned Australia",
    note:"Felt calm/euphoria is real — and dependence and brutal withdrawal are too. Included as the proof-case that blood-brain-barrier crossing changes everything (vs oral GABA)." },

  // --- Enhanced-experience & misc non-alkaloids ---
  { name:"Thujone (mugwort / absinthe)", plant:"Artemisia vulgaris / absinthium", region:"Eurasia", alkaloid:"no", chem:"monoterpene",
    fx:{stim:null,mood:null,calm:null,enh:"C"}, tier:3, dep:"none",
    interact:"GABA-A antagonist convulsant (oil)", legal:"EU caps 35/10 mg/L; US ≤10 ppm thujone",
    note:"Dream-enhancement claims are pure anecdote; the only RCT showed impairment. 10 mL wormwood oil → seizures/ICU (EMA)." },

  { name:"Myristicin / elemicin (nutmeg)", plant:"Myristica fragrans", region:"Moluccas/Global", alkaloid:"no", chem:"phenylpropene",
    fx:{stim:null,mood:null,calm:null,enh:"X"}, tier:2, dep:"none",
    interact:"—", legal:"Legal spice",
    note:"Culinary doses safe; ≥5 g produces unpleasant 24–48 h delirium with tachycardia — the 'high' is disputed as positive by those who experience it." },

  { name:"Salvinorin A", plant:"Salvia divinorum", region:"Oaxaca, Mexico", alkaloid:"no", chem:"diterpene (KOR agonist)",
    fx:{stim:null,mood:"X",calm:null,enh:"D"}, tier:3, dep:"low",
    interact:"—", legal:"~30 US states ban; federal unscheduled",
    note:"Documented intense psychoactivity (Johns Hopkins RCTs) — but kappa-opioid dissociation is frequently dysphoric; persistent-psychosis case reports. Documented ≠ positive." },

  { name:"Lactucin / lactucopicrin (wild lettuce)", plant:"Lactuca virosa", region:"Europe", alkaloid:"no", chem:"sesquiterpene lactone",
    fx:{stim:null,mood:null,calm:"X",enh:null}, tier:2, dep:"none",
    interact:"Anticholinergic-like toxicity case series (8 patients)", legal:"Legal; no EMA monograph",
    note:"'Opium lettuce' sedation is mice-only; human case series is adverse, not calming." },

  { name:"Nepetalactone (catnip)", plant:"Nepeta cataria", region:"Europe/Asia", alkaloid:"no", chem:"iridoid terpene",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:1, dep:"none",
    interact:"Pregnancy caution", legal:"Legal herb",
    note:"Mild traditional calming use; anecdotal only, but harmless." },

  { name:"β-Asarone (calamus)", plant:"Acorus calamus", region:"Asia/Europe", alkaloid:"no", chem:"phenylpropanoid",
    fx:{stim:"X",mood:null,calm:null,enh:"C"}, tier:3, dep:"none",
    interact:"Genotoxic carcinogen (rat hepatomas)", legal:"FDA-prohibited food additive",
    note:"Traditional stimulant/visionary use defeated by carcinogenicity — excluded." },

  { name:"Limonene (inhaled citrus)", plant:"Citrus spp. peel oil", region:"Global", alkaloid:"no", chem:"monoterpene",
    fx:{stim:null,mood:"C",calm:"D",enh:null}, tier:1, dep:"none",
    interact:"Oxidized oil = skin sensitizer (topical only)", legal:"Legal",
    note:"Small aromatherapy RCTs show acute calm/mood effects via olfaction — real but modest and route-specific." },

  { name:"CBD", plant:"Cannabis sativa (hemp)", region:"Global", alkaloid:"no", chem:"cannabinoid",
    fx:{stim:null,mood:null,calm:"C",enh:null}, tier:2, dep:"none",
    interact:"CYP inhibition; liver-enzyme elevations at high dose", legal:"Hemp <0.3% THC legal US (2018 Farm Bill); FDA bars supplement claims",
    note:"WHO 2018: subjective effects largely placebo-like at OTC doses; anxiety RCTs inconsistent (prescription Epidiolex is a separate evidence base)." },

  { name:"THC", plant:"Cannabis sativa", region:"Global", alkaloid:"no", chem:"cannabinoid",
    fx:{stim:null,mood:"D",calm:"C",enh:"D"}, tier:3, dep:"moderate",
    interact:"Anxiety/psychosis risk; impaired driving", legal:"Federal Schedule I US (rescheduling pending 2026); state-legal in ~half of US; patchwork EU",
    note:"Euphoria documented — excluded here on dependence (~10% of users), psychosis risk, and federal status, though legal reality is shifting fast." }
];
