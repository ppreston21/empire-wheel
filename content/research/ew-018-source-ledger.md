# EW-018 source-acquisition ledger

**Prepared:** 2026-08-13  
**Role:** research curator  
**Status:** research handoff; **not historical approval**

## Verification note and revised acquisition method

The first pass over-relied on individual institutional websites. The execution
environment still returns `401 Unauthorized` from its web research service and
`403 Forbidden` for most HTTPS requests through its network proxy on
2026-08-13, but that does **not** make a blocked museum domain a ticket-level
blocker. The revised method treats every catalogue page as replaceable and
also tests repository exports, open APIs, DOI metadata, excavation archives,
and scholarly datasets.

That broader pass found the Cuneiform Digital Library Initiative (CDLI) public
catalogue export hosted in the `cdli-gh/data` GitHub repository. The repository
README identifies it as a dump of CDLI public catalogue and text data and says
the last update was August 2022. On 2026-08-13 the complete `cdli_cat.csv` LFS
object could be downloaded anonymously from GitHub. The checked local copy was
154,768,722 bytes with SHA-256
`2e3232f75325b61c4d1e788d4d8c074c6230a947aed422110f9f35a6e353d09c`;
that hash also appears in the repository's LFS pointer.

- **Repository:** <https://github.com/cdli-gh/data>
- **Catalogue export:**
  <https://media.githubusercontent.com/media/cdli-gh/data/master/cdli_cat.csv>
- **Format and provenance note:**
  <https://github.com/cdli-gh/data/blob/master/README.md>

CDLI therefore provides a viable **discovery and catalogue-metadata path** even
while its application website is unavailable. It does not by itself clear an
object for learner publication: the GitHub repository does not expose an
explicit reuse license, `photo_up`/`lineart_up` flags are not image licenses,
and associated publications and renderings still require rights and historical
review. Search-result text remains a discovery aid, not a source.

This is the appropriate research handoff rather than an invented evidence lab.
The candidate records below are precise leads for the next curator with working
network access. They **must not enter learner-facing content** until every item
in its check list is confirmed and an independent historical reviewer approves
its proposed use.

## Does the CDLI method scale to other spokes?

The **method** scales; the **CDLI corpus** does not scale to all nineteen
spokes. Versioned bulk exports with stable record identifiers, provenance, and
publication fields should be preferred in every spoke because they can be
audited and searched without depending on one presentation website. CDLI is a
specialist cuneiform corpus, however, not a universal history collection.

- **Strong fit:** Sumer, Akkad, Ur III, Old Babylon, Assyria, and Neo-Babylon.
- **Selective fit:** Hittites and Persia, where cuneiform records illuminate
  only part of the spoke and must be joined to other archaeological and textual
  corpora.
- **Contextual edge cases:** Greece and later western-Asian histories when a
  cuneiform record directly bears on a transition or regional comparison.
- **Not a primary acquisition source:** Rome through the United States. Those
  spokes need domain-appropriate epigraphic, papyrological, archival, museum,
  statistical, library, or government repositories.

The reusable lesson is a source-adapter strategy—prefer export/API/DOI access,
record the dataset version and checksum, preserve the provider's identifier,
and separately verify item-level rights—not “use CDLI for every spoke.”

## Scholarly discovery platforms

Academia.edu and Elicit were added to the retry matrix on 2026-08-13. Both
domains returned `403 Forbidden` through this environment's proxy, so neither
could be searched here. A future pass may use them interactively where access
and their terms permit, but they are discovery services rather than historical
authorities: every useful result must be resolved to its DOI, publisher,
institutional repository, or author-deposited manuscript and checked there.
The project must not evade login, anti-bot controls, rate limits, or access
restrictions, and an Academia.edu upload is not assumed to be authorized merely
because it can be downloaded. Elicit's generated summaries are likewise not
sources.

Preferred scholarly discovery order for the next pass:

1. Crossref, OpenAlex, Semantic Scholar, library catalogues, and repository
   exports/APIs for structured identifiers and metadata;
2. institutional repositories and author-deposited manuscripts for access;
3. Academia.edu and Elicit for additional leads when permitted;
4. the publisher/DOI record and the work itself for final verification.

## Revised EW-018 first-pass results

The 64-field CDLI export was filtered for `Uruk III`, `Uruk IV`, `Uruk V`,
`Pre-Uruk V`, `Jemdet Nasr`, and proto-cuneiform catalogue text. It returned
17,731 broad matches; 3,845 Uruk-period records from Uruk/Warka had an exact
object type, a publication, an image or line-art availability flag, and at
least one excavation/findspot field. These counts are reproducible discovery
results, not historical claims for learner UI.

Three exact records now replace the earlier single-domain dead end. They remain
`candidate` pending inspection of the line art, primary publication, catalogue
semantics, and reuse terms:

### Candidate 1 — lexical tablet, CDLI P000001 / VAT 01533

- **State:** `candidate`; exact export row checked 2026-08-13
- **Stable identifiers:** CDLI catalogue ID **1**; museum no. **VAT 01533**;
  excavation no. **W 06435,a**; ARK **ark:/21198/zz001q0dtm**
- **Export metadata:** clay tablet, 31 × 61 × 18 mm; Uruk III (ca. 3200–3000
  BCE); Uruk/Warka; findspot square `M XVIII,?`; lexical genre; line-art flag
  `150ppi 20160630`; held by the Vorderasiatisches Museum, Berlin.
- **Publication trail recorded by CDLI:** *ATU* 3 (1993), pl. 11, W 6435,a;
  *ATU* 1, 594. CDLI designates it `CDLI Lexical 000002, ex. 065` and records no
  translation.
- **Proposed learner use:** distinguish the visible organization of marks from
  the catalogue classification “lexical” and from claims about an institution.
- **Unresolved gate:** inspect the line art and publications; confirm the ARK
  resolves; verify current museum custody and rights. No translation or sign
  reading may be supplied from this row.

### Candidate 2 — administrative tag, CDLI P000810 / VAT 15344

- **State:** `candidate`; exact export row checked 2026-08-13
- **Stable identifiers:** CDLI catalogue ID **749**; museum no. **VAT 15344**;
  excavation no. **W 06705,g**; ARK **ark:/21198/zz001r6x4m**
- **Export metadata:** clay tag, 23 × 32 × 11 mm; Uruk IV (ca. 3350–3200 BCE);
  Uruk/Warka; square `Pe XVI,3`; administrative genre; line-art flag
  `150ppi 20160630`; held by the Vorderasiatisches Museum, Berlin.
- **Context recorded by CDLI:** found in the sherd layer at the recessed wall of
  level IV; the catalogue notes that the object was hung on a string. Primary
  publication is *ATU* 5 (1994), pl. 13, W 6705,g, with *ATU* 1, 481 in its
  publication history.
- **Proposed learner use:** compare a portable/hung administrative medium with
  a tablet without assuming who issued it or what institution it served.
- **Unresolved gate:** inspect the line art and cited plates, verify the German
  findspot wording and chronology in context, and obtain line-art rights.

### Candidate 3 — administrative tag, CDLI P000835 / IM 025687

- **State:** `candidate`; exact export row checked 2026-08-13
- **Stable identifiers:** CDLI catalogue ID **774**; museum no. **IM 025687**;
  excavation no. **W 06759**; ARK **ark:/21198/zz001q6mm3**
- **Export metadata:** clay tag, 20 × 25 × 10 mm; Uruk IV (ca. 3350–3200 BCE);
  Uruk/Warka; square `Pd XVI,3`; administrative genre; line-art flag
  `150ppi 20160630`; held by the National Museum of Iraq, Baghdad.
- **Publication trail recorded by CDLI:** *ATU* 5 (1994), pl. 15, W 6759;
  *ATU* 1, 2; K. Szarzyńska, *JCS* 46 (1994), 1–10, tag no. 9; and R. Englund
  in *OBO* 160/1 (1998), p. 60, fig. 18.
- **Proposed learner use:** compare two excavated tags from different squares
  and ask what recurrence supports, while preserving the limits of a two-item
  comparison.
- **Unresolved gate:** inspect the line art and publications, reconcile the
  catalogue's custody-history note, confirm the ARK, and obtain rights.

This is a materially improved acquisition handoff, but it is not yet the final
three-object evidence lab. Candidates 2 and 3 are the same evidence type, and
the export cannot replace visual inspection or an independent historical
review. The next pass should retain the strongest tag, add a genuinely distinct
production/site/dataset object, and either clear all three or reject them.

## Existing reviewed readings

### Robert A. Carter and Graham Philip, eds., *Beyond the Ubaid*

- **State:** `historically-reviewed` in the Module 1 brief; not reverified here
- **Type:** edited scholarly volume
- **Citation:** Robert A. Carter and Graham Philip, eds., *Beyond the Ubaid:
  Transformation and Integration in the Late Prehistoric Societies of the
  Middle East*, Studies in Ancient Oriental Civilization 63 (Chicago: Oriental
  Institute of the University of Chicago, 2010).
- **Institutional locator:**
  <https://isac.uchicago.edu/sites/default/files/uploads/shared/docs/saoc63.pdf>
- **Access/rights record:** open institutional PDF was recorded as checked on
  2026-08-12. Reuse rights for figures are not inferred from free access.
- **Learner purpose:** test which evidence supports regional integration and
  which conclusions about hierarchy or control remain interpretations.
- **Expected time:** 25 minutes in the current runtime record.

### Nicola Crüsemann et al., eds., *Uruk: First City of the Ancient World*

- **State:** `historically-reviewed` in the Module 1 brief; not reverified here
- **Type:** scholarly exhibition catalogue / open digital publication
- **Citation:** Nicola Crüsemann, Margarete van Ess, Markus Hilgert, and Beate
  Salje, eds., *Uruk: First City of the Ancient World* (Los Angeles: Getty
  Publications, 2019).
- **Institutional locator:** <https://www.getty.edu/publications/uruk/>
- **Access/rights record:** open web edition/PDF was recorded as checked on
  2026-08-12. Object-image credit lines must be checked individually.
- **Learner purpose:** distinguish material indications of scale from the
  interpretive claim carried by “first city.”
- **Expected time:** 20 minutes in the current runtime record.

## Superseded first-pass candidate evidence set

The entries below preserve the original pass for audit history. The revised
CDLI candidates above supersede the Met-specific acquisition path; category-only
entries remain useful statements of evidence still needed, not selected objects.

### A. Administration — proto-cuneiform tablet, The Met 1988.433.1

- **State:** `candidate` — live record and all metadata require checking
- **Expected collection locator:** accession **1988.433.1**, The Metropolitan
  Museum of Art; expected object-page identifier **329081**:
  <https://www.metmuseum.org/art/collection/search/329081>
- **Expected title to verify:** *Proto-Cuneiform Tablet with seal impressions:
  administrative account of barley distribution with cylinder seal impression
  of a male figure, hunting dogs, and boars*
- **Expected date/culture to verify:** ca. 3100–2900 BCE; Jemdet Nasr period
- **Proposed direct observation:** a clay tablet bears impressed/incised signs
  and a repeated seal image. Describe only visible layout, marks, and imagery
  after inspecting the record image at full size.
- **Proposed context:** catalogue description of medium, period, provenance,
  dimensions, and administrative content; translation/identification must be
  attributed to the catalogue rather than presented as visual observation.
- **Interpretation to test:** durable marks and sealing can support an inference
  about recording and authorization, but one document cannot establish the
  scale or centralization of an institution.
- **Uncertainty:** provenance, excavated context, sign reading, precise date,
  and whether “barley distribution” is the current catalogue wording all need
  live confirmation.
- **Rights/access checks:** confirm public access; image Open Access/Public
  Domain badge and downloadable image; record the exact credit line and API or
  image permalink if supplied.
- **Learner purpose/time:** separate what can be seen from the catalogue's
  reading of an administrative act; 8 minutes.

### B. Production — bevel-rim bowl assemblage/object

- **State:** `candidate category` — **no object selected**
- **Reason for stopping:** an exact museum/excavation record with secure
  provenance, date, dimensions, image rights, and a stable catalogue locator
  could not be opened. A generic photograph or the category “bevel-rim bowl”
  does not satisfy the acquisition brief.
- **Required next check:** select one catalogued vessel plus an assemblage-level
  scholarly source. Confirm object number, findspot/stratum, dating basis,
  manufacture description, and image license.
- **Proposed direct observation:** record rim profile, fabric/finish, dimensions,
  visible forming traces, and variation only from an inspectable record.
- **Interpretations to contrast:** rapid standardized production, rationing,
  institutional provisioning, and other uses are hypotheses; resemblance or
  frequency alone does not demonstrate centralized control.
- **Uncertainty to preserve:** a single bowl cannot show mass production; an
  assemblage cannot by itself identify producer, recipient, contents, or
  governing institution.
- **Learner purpose/time:** ask what standardization can and cannot demonstrate;
  8 minutes.

### C. Place / map — phased Uruk excavation plan

- **State:** `candidate category` — **no plan selected**
- **Reason for stopping:** a plan cannot be cleared from a book-level link.
  Figure identity, phase/date, excavator/publication, scale, north arrow,
  alterations/restoration, and reproduction permission must all be checked.
- **Required next check:** use the Getty catalogue only to identify the original
  excavation publication and exact figure; prefer an institutional excavation
  repository or a separately licensed plan. Record the figure number and page,
  original creator, and rights holder.
- **Proposed direct observation:** compare footprints, alignments, open spaces,
  and relative scale visible on one explicitly dated phase plan.
- **Interpretation to test:** monumental scale and planned spatial relations may
  indicate coordinated labor; they do not by themselves identify a “temple,” a
  ruler, labor conditions, or a centralized state.
- **Uncertainty to preserve:** excavated extent, phase conflation, reconstruction,
  later disturbance, and the mismatch between ancient and modern waterways.
- **Learner purpose/time:** distinguish excavated feature, reconstruction, and
  institutional interpretation; 10 minutes.

### D. Synthesis — settlement survey dataset/map

- **State:** `candidate category` — **no dataset selected**
- **Reason for stopping:** no methods statement, machine-readable record, DOI,
  date bins, coverage, or reuse terms could be validated.
- **Required next check:** locate an institutional or DOI-backed survey dataset
  for southern Mesopotamia and document survey coverage, site-definition rules,
  chronology bins, preservation/visibility bias, coordinates policy, and
  license. A redrawn map must cite both data and cartographic transformation.
- **Proposed direct observation:** only distributions and counts actually
  represented in the checked dataset/map.
- **Interpretation to test:** changing apparent settlement scale may support an
  urban-concentration argument, but recovery, dating, publication, and landscape
  change constrain comparison.
- **Learner purpose/time:** interrogate how survey method shapes a claim about
  urban growth; 10 minutes.

## EW-018a — learner-friendly Read proposal

### Problem

The present activity sends learners from a 45-minute Read block to two entire
edited volumes. Even valid open-access book links create unnecessary search
cost, and a large PDF is a poor primary route when a stable HTML chapter or a
locally authored, cited reading guide can carry the learning task. Free access
also does not guarantee a durable URL, usable mobile reading, or accessible PDF
structure.

### Proposed acceptance criteria

1. Each required reading names a **specific chapter/section and exact page range
   or stable chapter-level HTML anchor**, not only a book-level landing page.
2. Each resource provides a 150–300 word original reading guide stating the
   question, essential context, 3–5 signposts, and what the source does **not**
   establish; the guide paraphrases rather than reproduces copyrighted prose.
3. The learner receives a visible “Read the selected section” primary action;
   “Open the complete book/PDF” is a secondary deep-dive action.
4. A checked accessible HTML alternative is preferred. If the only source is a
   PDF, provide the exact printed/PDF pages, file size, accessibility status,
   and a durable institutional fallback or a locally authored cited synopsis.
5. Link checking includes HTTP success after redirects, anonymous access,
   mobile usability, and the chapter/anchor destination, with verification date.
6. The comparison task uses one claim from each selection and asks the learner
   to identify evidence, scale of analysis, and one limitation; completion does
   not depend on reading either whole book.
7. Metadata continues to satisfy R-004, and excerpts/figures receive explicit
   rights review. A synopsis never masquerades as the scholar's own words.

### Recommended packet (pending locator verification)

- **Ubaid selection:** the editors' introductory chapter in Carter and Philip,
  rather than the whole SAOC 63 volume. The next curator must record its exact
  chapter title, printed page span, PDF page span, and start-page deep link (if
  the repository supports one). Target 12–15 selected pages / 25 minutes.
- **Uruk selection:** one evidence-centered chapter in the Getty web edition,
  delivered through its chapter-level HTML page rather than the book landing
  page. Select only after its author, title, stable URL, headings, object credit
  lines, and approximate word count are checked. Target 8–12 minutes.
- **Fallback:** an Empire Wheel reading guide containing a neutral outline and
  citations to exact pages/sections, plus the complete institutional publication
  as optional deep dive. Do not copy a chapter or substitute generated summary
  for scholarship.

No page range or chapter URL is supplied here because it could not be opened and
verified in this environment. Guessing one would reproduce the reliability
problem EW-018a is intended to solve.

## Historical-review questions

1. Does each selected object have a confirmed identity, stable locator,
   provenance/context, date, credit line, and reuse status?
2. Are visible observations independently reproducible from the supplied image,
   plan, or data rather than imported from a catalogue interpretation?
3. Are catalogue readings and scholarly interpretations attributed, with viable
   alternatives and evidentiary limits visible?
4. Does the place evidence represent one named phase rather than a composite
   “Uruk plan,” and does the survey evidence disclose coverage and chronology?
5. Do the three required objects span more than one evidence type and jointly
   support comparison without pretending to prove a single causal story?
6. Do the Read selections open directly at manageable, named sections and offer
   a useful non-PDF-first path?
