export interface GalleryItem {
  seed: string;
  caption: string;
  alt: string;
}

export interface ServiceData {
  slug: string;
  name: string;
  tagline: string;
  heroSeed: string;
  metaTitle: string;
  metaDescription: string;
  overview: {
    headline: string;
    body: string;
    features: string[];
  };
  steps: Array<{ n: string; title: string; body: string }>;
  gallery: GalleryItem[];
  benefits: Array<{ icon: string; title: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
}

export const services: ServiceData[] = [
  {
    slug: "lawn-mowing",
    name: "Lawn Mowing",
    tagline:
      "Precision-cut lawns, perfectly maintained — week after week.",
    heroSeed: "lawn-summer-garden",
    metaTitle: "Lawn Mowing London & Home Counties — Verdant Studio",
    metaDescription:
      "Professional lawn mowing and lawn care services in London and the Home Counties. Regular scheduled visits, precision stripe cutting, edging and clippings removal.",
    overview: {
      headline: "A lawn that stays show-ready, without the effort",
      body: "We take the guesswork and hard work out of lawn care. Our experienced team visits on a schedule that suits your lawn's growth cycle — cutting to the right height, edging borders cleanly, and leaving your grass healthy and stripe-perfect every time. No missed visits, no excuses.",
      features: [
        "Scheduled weekly or fortnightly visits",
        "Precision rotary and cylinder mowing",
        "Clean edge trimming on all borders",
        "Clippings collected and removed",
        "Seasonal height adjustments",
        "Grass health assessment included",
      ],
    },
    steps: [
      {
        n: "01",
        title: "Lawn Assessment",
        body: "We visit your property, assess grass type, soil condition, and growth patterns to recommend the right cutting schedule and height for your specific lawn.",
      },
      {
        n: "02",
        title: "Scheduled Mowing",
        body: "Your dedicated team arrives on an agreed schedule, cutting at the optimal height, edging all borders neatly, and removing every last clipping before leaving.",
      },
      {
        n: "03",
        title: "Seasonal Care",
        body: "We adjust frequency and technique as seasons change — scarifying in autumn, lighter cuts in dry spells, and a thorough winter preparation programme.",
      },
    ],
    gallery: [
      {
        seed: "lawn-stripes-summer",
        caption: "Show lawn with precision stripe cutting, Surrey",
        alt: "Perfectly striped garden lawn",
      },
      {
        seed: "garden-edge-trim",
        caption: "Clean border edging detail",
        alt: "Lawn edge trimming",
      },
      {
        seed: "summer-grass-green",
        caption: "Lush summer lawn restoration",
        alt: "Green summer garden lawn",
      },
      {
        seed: "garden-maintenance-cottage",
        caption: "Residential lawn care, Surrey",
        alt: "Residential garden lawn maintenance",
      },
      {
        seed: "lawn-fresh-morning",
        caption: "Before & after annual care programme",
        alt: "Lawn before and after treatment",
      },
    ],
    benefits: [
      {
        icon: "◈",
        title: "Never miss a visit",
        body: "Standing appointments mean your lawn gets cut at exactly the right time — no chasing, no rescheduling, no forgotten cuts mid-season.",
      },
      {
        icon: "◈",
        title: "Proper equipment",
        body: "We use commercial-grade rotary and cylinder mowers that cut cleanly without tearing grass blades or compacting the soil beneath.",
      },
      {
        icon: "◈",
        title: "Qualified team",
        body: "All operatives hold City & Guilds qualifications in amenity horticulture. We understand grass science, not just cutting.",
      },
    ],
    faq: [
      {
        q: "How often do you need to mow my lawn?",
        a: "Most residential lawns benefit from weekly cuts in spring and summer, fortnightly in autumn, and rarely in winter. We'll recommend the right schedule after our initial assessment.",
      },
      {
        q: "Do you take away the grass clippings?",
        a: "Yes. We collect all clippings on every visit and remove them from site for composting, leaving your garden completely clean and tidy.",
      },
      {
        q: "Do I need to be home during the visit?",
        a: "Not at all. Most of our clients give us gate access and we get on with the job. You'll receive a brief visit note after each cut.",
      },
      {
        q: "What happens if the weather is bad?",
        a: "If grass is too wet to cut safely (which can cause real damage), we'll reschedule to the next available slot and let you know in advance.",
      },
    ],
  },

  {
    slug: "garden-design",
    name: "Garden Design",
    tagline:
      "Spaces conceived with intention — built to endure and delight.",
    heroSeed: "luxury-garden-design",
    metaTitle: "Bespoke Garden Design London & Home Counties — Verdant Studio",
    metaDescription:
      "Award-winning bespoke garden design in London and the Home Counties. From initial concept to final planting, we create extraordinary outdoor spaces.",
    overview: {
      headline: "Your garden, redesigned from the ground up",
      body: "Great garden design is about understanding how you live — and translating that into a space that flows beautifully, feels personal, and works through every season. We listen carefully, survey thoroughly, and design with purpose. Every element, from the paving pattern to the final shrub placement, is considered and intentional.",
      features: [
        "Detailed site survey and soil analysis",
        "Concept drawings and mood boards",
        "Full 2D plans drawn to scale",
        "Bespoke seasonal planting schemes",
        "Material and furniture specification",
        "Project management through build",
      ],
    },
    steps: [
      {
        n: "01",
        title: "Design Consultation",
        body: "We meet at your property, discuss your vision, lifestyle, and budget. We survey the space, note light patterns, soil conditions, and existing features worth keeping.",
      },
      {
        n: "02",
        title: "Concept & Design",
        body: "We produce concept drawings, a detailed mood board, and eventually full scaled plans with complete planting lists and material specifications.",
      },
      {
        n: "03",
        title: "Build & Planting",
        body: "Our in-house construction and horticulture teams bring the design to life, with full project management from groundwork to the final planted border.",
      },
    ],
    gallery: [
      {
        seed: "contemporary-garden-kensington",
        caption: "Contemporary courtyard garden, Kensington",
        alt: "Luxury contemporary garden design",
      },
      {
        seed: "garden-planting-design",
        caption: "Bespoke planting scheme, Berkshire",
        alt: "Garden planting scheme",
      },
      {
        seed: "terraced-garden-surrey",
        caption: "Terraced entertaining garden, Surrey",
        alt: "Garden terrace design",
      },
      {
        seed: "formal-garden-layout",
        caption: "Formal garden layout, Oxfordshire",
        alt: "Formal garden design",
      },
      {
        seed: "garden-night-lighting",
        caption: "Integrated lighting design detail",
        alt: "Garden at night with lighting",
      },
    ],
    benefits: [
      {
        icon: "◈",
        title: "Truly bespoke",
        body: "We design exclusively for your plot, your lifestyle, and your brief. No templates, no recycled ideas from the last project.",
      },
      {
        icon: "◈",
        title: "One team, start to finish",
        body: "The same practice that designs your garden manages the build. No handoff, no miscommunication, no quality gaps between design and delivery.",
      },
      {
        icon: "◈",
        title: "Award-winning pedigree",
        body: "Our designers are RHS-qualified landscape architects with work published in Gardens Illustrated and House & Garden magazine.",
      },
    ],
    faq: [
      {
        q: "How long does the design process take?",
        a: "A standard residential project typically takes 6–10 weeks from initial consultation to an approved design. Larger or more complex projects may require 12–16 weeks.",
      },
      {
        q: "Do you offer design-only services?",
        a: "Yes. If you have your own build team or prefer to implement the design yourself, we offer design-only packages that include full plans and a handover meeting.",
      },
      {
        q: "What size gardens do you design?",
        a: "We work on everything from intimate city courtyards (under 30m²) to multi-acre country estates. All projects receive the same level of care and attention.",
      },
      {
        q: "Can you work within an existing garden structure?",
        a: "Absolutely. Many of our clients want to refresh or reimagine an existing space rather than start from scratch. We assess what's worth keeping and design around it.",
      },
    ],
  },

  {
    slug: "paving-landscaping",
    name: "Paving & Landscaping",
    tagline:
      "Precision groundwork and premium surfaces, built to last decades.",
    heroSeed: "garden-stone-patio",
    metaTitle: "Paving & Landscaping Construction London — Verdant Studio",
    metaDescription:
      "Expert paving and landscaping construction in London and the Home Counties. Patios, driveways, paths, retaining walls, and full garden builds using premium natural and engineered materials.",
    overview: {
      headline: "Outdoor surfaces built with craftsmanship",
      body: "The hard landscaping in your garden sets the tone for everything else. Poorly laid paving moves, cracks, and drains badly. Done right, it defines space beautifully and lasts a lifetime. Our construction team combines traditional stonemasonry skills with modern drainage and sub-base engineering, using materials sourced from the best UK and European quarries.",
      features: [
        "Natural stone, porcelain, and block paving",
        "Driveways and parking areas",
        "Patios and outdoor entertaining surfaces",
        "Garden paths, steps, and level changes",
        "Retaining walls and raised planters",
        "Drainage solutions and SuDS compliance",
      ],
    },
    steps: [
      {
        n: "01",
        title: "Survey & Design",
        body: "We survey levels, assess drainage, and produce a design drawing showing layout, materials, and any civil engineering requirements before a single spade hits the ground.",
      },
      {
        n: "02",
        title: "Groundworks",
        body: "Excavation, sub-base installation to specification, and drainage runs are all completed before any surface material is laid. This is where quality is truly built.",
      },
      {
        n: "03",
        title: "Surface & Finish",
        body: "All paving is laid, pointed, and sealed by our stonemasonry team. Steps, walls, and planters are built and finished to the same exacting standard.",
      },
    ],
    gallery: [
      {
        seed: "yorkstone-patio-garden",
        caption: "Yorkstone patio with integrated planting, Richmond",
        alt: "Natural stone garden patio",
      },
      {
        seed: "sandstone-path-garden",
        caption: "Sandstone path with moss planting joints",
        alt: "Garden stepping stone path",
      },
      {
        seed: "block-paving-driveway",
        caption: "Permeable block paving driveway, Guildford",
        alt: "Block paving driveway",
      },
      {
        seed: "retaining-wall-terrace",
        caption: "Dry stone retaining wall and terracing",
        alt: "Garden retaining wall",
      },
      {
        seed: "porcelain-terrace-modern",
        caption: "Large-format porcelain terrace, Chelsea",
        alt: "Modern porcelain garden terrace",
      },
    ],
    benefits: [
      {
        icon: "◈",
        title: "No sub-base shortcuts",
        body: "We excavate to the correct depth and install a full MOT Type 1 sub-base on every project. Your paving will not move, dip, or crack.",
      },
      {
        icon: "◈",
        title: "Drainage expertise",
        body: "All our designs account for surface water run-off and comply with permitted development drainage requirements from day one.",
      },
      {
        icon: "◈",
        title: "10-year workmanship warranty",
        body: "We stand behind our construction work with a 10-year warranty on all structural elements. That's how confident we are in what we build.",
      },
    ],
    faq: [
      {
        q: "How long does a patio project typically take?",
        a: "A standard patio of 50–80m² usually takes 5–8 working days from groundworks to completion. Larger projects or those requiring significant level changes take proportionally longer.",
      },
      {
        q: "Do I need planning permission for a patio or driveway?",
        a: "Patios generally don't require planning permission. Driveways have different rules depending on surface permeability and size — we'll advise you precisely during the survey.",
      },
      {
        q: "Which paving material do you recommend?",
        a: "It depends on your budget, style, and use. Natural sandstone is timeless and forgiving underfoot. Porcelain offers the most low-maintenance surface. We'll walk you through options with physical samples.",
      },
      {
        q: "Can you replace just part of an existing patio?",
        a: "We can, but we'd advise against it in most cases — different sub-base depths and weathered stone rarely match well. We'll give you honest advice on whether repair or full replacement makes more sense.",
      },
    ],
  },

  {
    slug: "hedge-trimming",
    name: "Hedge Trimming",
    tagline:
      "Precise, expert hedge care that keeps your boundaries looking immaculate.",
    heroSeed: "formal-hedge-topiary",
    metaTitle: "Hedge Trimming & Maintenance London — Verdant Studio",
    metaDescription:
      "Professional hedge trimming and maintenance across London and the Home Counties. All hedge types, formal topiary, seasonal programmes and large-scale hedge reduction works.",
    overview: {
      headline: "Hedges trimmed with precision and expertise",
      body: "A well-kept hedge is the backbone of a great garden — it provides structure, privacy, and a crisp backdrop for everything else. Poorly trimmed hedges look ragged, grow unevenly, and can thin out permanently if cut at the wrong time. Our team works to seasonal schedules, cutting each species at exactly the right point in the year for dense, healthy regrowth.",
      features: [
        "Box, yew, beech, laurel, and privet",
        "Formal and informal hedge styles",
        "Topiary maintenance and reshaping",
        "Species-specific seasonal timing",
        "All arisings removed from site",
        "Height and width reduction works",
      ],
    },
    steps: [
      {
        n: "01",
        title: "Hedge Assessment",
        body: "We review your hedges' species, current condition, and your desired shape to build a seasonal trimming schedule that works with each plant's natural growth rhythm.",
      },
      {
        n: "02",
        title: "Precision Trimming",
        body: "Using commercial-grade hedge trimmers and specialist long-reach equipment, we cut to the agreed profile — clean faces, crisp tops, sharp corners where required.",
      },
      {
        n: "03",
        title: "Clear & Tidy",
        body: "All arisings are collected, bagged, and removed from site. We leave your garden with no debris, no mess, and no evidence we were ever there except perfect lines.",
      },
    ],
    gallery: [
      {
        seed: "formal-yew-hedge",
        caption: "Formal yew hedge maintenance, Oxfordshire",
        alt: "Formal clipped yew hedge",
      },
      {
        seed: "box-topiary-balls",
        caption: "Box ball topiary, residential garden",
        alt: "Box ball topiary in garden",
      },
      {
        seed: "beech-hedge-autumn",
        caption: "Beech hedge autumn reduction, Surrey",
        alt: "Beech hedge in autumn",
      },
      {
        seed: "laurel-privacy-hedge",
        caption: "Laurel privacy hedge, SE London",
        alt: "Laurel privacy hedge",
      },
      {
        seed: "privet-hedge-before-after",
        caption: "Overgrown privet, before and after",
        alt: "Privet hedge before and after trimming",
      },
    ],
    benefits: [
      {
        icon: "◈",
        title: "Species-specific timing",
        body: "We never cut a hedge at the wrong time of year. Each species has its window — we work to it to protect nesting birds and encourage the densest possible regrowth.",
      },
      {
        icon: "◈",
        title: "Professional-grade equipment",
        body: "Our team uses commercial Honda and Stihl hedge trimmers, scaffolding towers, and long-reach tools to access heights that ladders simply can't safely reach.",
      },
      {
        icon: "◈",
        title: "Zero mess, guaranteed",
        body: "Every cut is followed by a thorough clear-up. We remove all arisings from your property — nothing left in borders, on lawns, or in gutters.",
      },
    ],
    faq: [
      {
        q: "How often should hedges be trimmed?",
        a: "It depends on the species. Fast growers like privet and Leylandii may need 2–3 cuts per year. Formal yew and box typically need 2 cuts. Beech is usually managed once annually.",
      },
      {
        q: "When is the best time to trim hedges?",
        a: "We avoid the nesting season (March–August) for major works. The main cutting window for most species is late summer through autumn. We'll advise on exact timing for your specific hedge.",
      },
      {
        q: "Can you reduce an overgrown hedge in height?",
        a: "Yes, in most cases. Species like yew, box, and laurel tolerate significant reductions. We'll assess whether hard reduction is viable and advise on managing regrowth afterwards.",
      },
      {
        q: "Do you work at height?",
        a: "Yes. We use professional scaffolding towers, MEWP equipment, and arborist-trained operatives where required for tall hedges, topiary, and large formal structures.",
      },
    ],
  },

  {
    slug: "commercial-landscaping",
    name: "Commercial Landscaping",
    tagline:
      "Grounds that reflect your brand — maintained to the highest professional standard.",
    heroSeed: "commercial-office-garden",
    metaTitle:
      "Commercial Landscaping London & Home Counties — Verdant Studio",
    metaDescription:
      "Professional commercial grounds maintenance and landscaping for businesses, estates, and developments across London and the Home Counties. Contract-based or one-off projects.",
    overview: {
      headline: "Professional grounds maintenance for businesses",
      body: "First impressions matter. The landscaping around your commercial property, development, or estate says something about the organisation behind it. We provide structured, contract-based grounds maintenance programmes for offices, retail parks, housing developments, hotels, and private estates — delivering consistent, high-quality results under a single point of contact.",
      features: [
        "Grounds maintenance contracts",
        "Seasonal planting programmes",
        "Car park and hardscape management",
        "Irrigation system maintenance",
        "Full health & safety compliance",
        "Post-visit reports and documentation",
      ],
    },
    steps: [
      {
        n: "01",
        title: "Site Survey",
        body: "We conduct a thorough survey of your entire grounds, document all existing planting, hardscape, and infrastructure, and identify priorities and risks.",
      },
      {
        n: "02",
        title: "Contract Proposal",
        body: "We produce a detailed maintenance specification and written contract proposal covering visit frequency, scope of works, and fixed pricing — no hidden costs.",
      },
      {
        n: "03",
        title: "Managed Programme",
        body: "A dedicated site team visits to schedule. You receive post-visit reports with photographic records and direct access to your named account manager.",
      },
    ],
    gallery: [
      {
        seed: "corporate-campus-grounds",
        caption: "Corporate campus grounds management, Canary Wharf",
        alt: "Corporate office landscape",
      },
      {
        seed: "commercial-seasonal-planting",
        caption: "Seasonal planting programme, retail park",
        alt: "Commercial seasonal planting",
      },
      {
        seed: "hotel-garden-estate",
        caption: "Hotel estate grounds management, Kent",
        alt: "Hotel garden estate",
      },
      {
        seed: "housing-development-landscape",
        caption: "New development grounds, Hertfordshire",
        alt: "Housing development landscaping",
      },
      {
        seed: "commercial-car-park-planting",
        caption: "Car park landscaping and ongoing maintenance",
        alt: "Commercial car park landscaping",
      },
    ],
    benefits: [
      {
        icon: "◈",
        title: "Single point of contact",
        body: "Every commercial client is assigned a dedicated account manager. One number, one relationship — no call centres, no handoffs, no repeated explanations.",
      },
      {
        icon: "◈",
        title: "Fully insured and accredited",
        body: "We carry £10m public liability insurance, are BALI accredited, and operate in full compliance with current health and safety legislation.",
      },
      {
        icon: "◈",
        title: "Transparent reporting",
        body: "You receive a written visit report after every maintenance attendance, with photographs and notes on any remedial actions required or recommended.",
      },
    ],
    faq: [
      {
        q: "Do you offer flexible contract lengths?",
        a: "Yes. We offer rolling monthly, annual, and multi-year contracts. We're confident enough in our work not to lock clients into unnecessarily long terms.",
      },
      {
        q: "Can you handle large or multi-site estates?",
        a: "Yes. We manage some of the largest private estates in the Home Counties, as well as multi-site commercial clients with properties across London and the South East.",
      },
      {
        q: "How quickly can you start a commercial contract?",
        a: "For new contracts, we typically mobilise within 2–4 weeks of signing. For urgent interim maintenance requirements, we can often accommodate sooner.",
      },
      {
        q: "Do you provide out-of-hours or weekend services?",
        a: "Yes. For commercial clients where weekday operations make daytime working impractical, we schedule visits at weekends or early morning at no additional charge.",
      },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
