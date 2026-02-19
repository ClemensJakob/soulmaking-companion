export type Element = {
  name: string
  short_name: string
  short_desc: string
  long_desc: string
  questions: string[]
}

export type TagColor = {
  bg: string
  text: string
  hover: string
}

export const elements: Record<string, Element> = {
  energy_body_awareness: {
    name: 'Energy Body Awareness',
    short_name: 'energy body',
    short_desc:
      'Imaginal perception includes sensitivity to the whole energy body, not just mental imagery.',
    long_desc:
      'Here the body is not a mere background but a primary medium of knowing. Energetic textures—vibration, warmth, pressure, shimmer, density—are part of what the image is. This sensitivity can refine discernment: what opens, what closes, what enlivens, what dulls. As energy body awareness grows, images often become more vivid and responsive, less "head-only."',
    questions: [
      'Where do you feel them in the energy body right now?',
      'What shifts in the energy body when they come closer?',
      'Do they bring warmth, pressure, shimmer, or stillness into you?',
    ],
  },

  loving_and_being_loved: {
    name: 'Loving and Being Loved',
    short_name: 'loving / being loved',
    short_desc:
      "There's a felt mutual love—from you to the image and from the image to you, in its own style.",
    long_desc:
      'This node points to reciprocity: the relationship carries warmth, care, tenderness, fierceness, or some unique flavor of love. The kind of love can vary widely, and part of the practice is allowing a range of loves rather than one habitual tone. This mutuality helps the image feel like an encounter rather than a projection. Love also supports staying close, listening longer, and letting the image deepen without coercion.',
    questions: [
      'How do you love them, in your own way?',
      'How do they love you back?',
      'What flavor of love moves between you?',
    ],
  },

  eros: {
    name: 'Eros',
    short_name: 'eros',
    short_desc:
      'Eros is a loving desire for more intimacy/contact/knowing of the beloved (not necessarily sexual).',
    long_desc:
      'Eros is the moving current that wants closer relation, fuller revelation, deeper communion. When supported by other elements, it becomes part of a dynamism that expands the Eros–Psyche–Logos interplay. Eros brings animation and seriousness at once: it matters, and it moves. It also protects the work from becoming dry or merely analytical, because it wants encounter, not just explanation.',
    questions: [
      'Do you want to move closer to them?',
      'Do they seem to want more of you?',
      'What in you longs to know them more deeply?',
    ],
  },

  beauty: {
    name: 'Beauty',
    short_name: 'beauty',
    short_desc: 'The soul senses beauty here—even when it isn\'t "beautiful" in conventional ways.',
    long_desc:
      'Beauty is an aesthetic recognition that something precious or true is present. It might be tender, haunting, austere, strange, luminous, or darkly exquisite. This beauty draws attention naturally and invites care rather than use. It often opens subtle devotion and can be a compass: what beauty is revealing, what beauty is requesting.',
    questions: [
      'What is beautiful about them, in their own way?',
      'Where does beauty shimmer between you?',
      'Can you let their beauty affect you?',
    ],
  },

  trust: {
    name: 'Trust',
    short_name: 'trust',
    short_desc: '"Sprinkle a few grains of trust" in the image, and the process can unfold.',
    long_desc:
      "Trust doesn't mean credulity; it's an experimental leaning-in. Even if an image looks suspicious, banal, or unsettling, some trust can relax the constriction that prevents transformation. Trust alters the relational field: it invites response, dialogue, and further showing. With trust, you're more willing to stay near the image long enough for its depths to emerge.",
    questions: [
      'Can you offer them a little more trust?',
      'If you trusted them slightly more, what would change?',
      'Do they feel more alive when you soften into trust?',
    ],
  },

  towards_soulmaking_and_soulfulness: {
    name: 'Towards Soulmaking and Soulfulness',
    short_name: 'towards soulmaking',
    short_desc: 'One senses this image can lead onward toward soulmaking—toward more soulfulness.',
    long_desc:
      'This node is an intuitive orientation: "this has soul in it," or "this can make soul." It\'s less about instant results and more about the direction of the current. The image seems capable of deepening meaning, enlarging perception, and reshaping the heart\'s capacities. When this sense is present, the relationship stops being merely interesting and begins to feel consequential in a soulful way.',
    questions: [
      'Do they feel like they carry soul?',
      'Where might they lead you, if you followed?',
      'Does being with them make you more soulful?',
    ],
  },

  dimensionality_shading_into_divinity: {
    name: 'Dimensionality Shading into Divinity',
    short_name: 'dimensionality',
    short_desc:
      "The image isn't flat; it has dimensions that recede or open forward into divinity.",
    long_desc:
      'Dimensionality means depth and layeredness: more is present than the surface shows. As these dimensions become sensed, they can shade into a sacred register—an opening toward divinity. This is often felt bodily and aesthetically, not forced by belief. The "thing" becomes a doorway: its depth implies more-than-ordinary reality without needing literal claims.',
    questions: [
      'Do they feel layered, as if more lies behind?',
      'Where do they open into depth or height?',
      'Do they hint at something sacred beyond their surface?',
    ],
  },

  reverence: {
    name: 'Reverence',
    short_name: 'reverence',
    short_desc: 'A soulful, loving, respectful trembling before something "more than me."',
    long_desc:
      "Reverence is the heart's natural response to sensed divinity or sacred depth. It's not performative; it's a tone of respectful awe, a willingness to be touched and shaped. Reverence changes how you look: less grasping, more honoring, more careful. It can stabilize the work ethically—images aren't puppets or tools, but presences to be met.",
    questions: [
      'Do you feel a gentle bow toward them?',
      'What changes in you when you approach them with reverence?',
      'Can you let them be more than you?',
    ],
  },

  humility: {
    name: 'Humility',
    short_name: 'humility',
    short_desc:
      "Humility is an appropriate recognition of one's place in relation to divinity—not self-deprecation.",
    long_desc:
      "Humility here means you don't treat the sacred as yours to manipulate. It's a bowing of the controlling mind and a softening into a larger order of things. This humility does not require shrinking the self; it can coexist with clarity, agency, and discernment. When divinity is sensed and not blocked, humility often arises naturally as the fitting relational posture.",
    questions: [
      'Can you soften your will in their presence?',
      'What happens if you don’t try to control them?',
      'Do they invite you to bow inwardly?',
    ],
  },

  a_sense_of_unfathomable_beyonds: {
    name: 'A Sense of Unfathomable Beyonds',
    short_name: 'unfathomable beyonds',
    short_desc:
      "The image feels unfathomable—you sense more beyonds, and you can't get to the bottom of it.",
    long_desc:
      'This node protects mystery: the image exceeds conceptual capture. You may understand some things, but you also sense depths you cannot exhaust. That "more" isn\'t a problem; it\'s part of the nourishment. It keeps the relationship alive, because the image can continue revealing without being finished.',
    questions: [
      'Do they feel inexhaustible?',
      'Can you sense more in them than you can grasp?',
      'What remains mysterious about them?',
    ],
  },

  soft_and_elastic_edges: {
    name: 'Soft and Elastic Edges',
    short_name: 'soft / elastic edges',
    short_desc: 'The boundaries of what the image is are soft, moving, changeable—not static.',
    long_desc:
      'Like a person, an image has edges that can shift over time: it can surprise you, expand, reconfigure, or become more subtle. This elasticity supports growth of meaning and feeling without hardening into fixed definitions. It allows refinement without rigidity. When edges soften, the imaginal becomes more breathable—less pinned down, more alive.',
    questions: [
      'Are their edges soft or shifting?',
      'Do they change when you look again?',
      'Can you let them remain undefined?',
    ],
  },

  concertina: {
    name: 'Concertina',
    short_name: 'concertina',
    short_desc: 'Implicitly: "This is one image; there are other possible images too."',
    long_desc:
      "Concertina is a sense of a wider imaginal field behind the current appearance. Even if other possibilities aren't clear, there's a tacit openness that prevents total fixation. This keeps creativity and freedom available: the image can develop, or another image can emerge, without force. Concertina helps the relationship stay spacious and prevents the current image from becoming tyrannical or final.",
    questions: [
      'Do you sense other possible images behind them?',
      'If they shifted form, what might they become?',
      'Can they be one among many?',
    ],
  },

  theatre_like_quality: {
    name: 'Theatre-like Quality',
    short_name: 'theatre-like quality',
    short_desc:
      'The image has poetic/artistic truth—not quite real, not quite unreal, but in-between.',
    long_desc:
      'This node describes the ontological "middle": the image carries power and truth like art does. It matters, affects, and can transform, without needing literal status. Theatre-like quality supports play and responsiveness—scenes can shift, dialogue can happen, symbols can metamorphose. It also guards against two errors: concretizing as fact, or dismissing as mere fantasy.',
    questions: [
      'Do they feel like a scene in a sacred play?',
      'Can you let them be real in a poetic way?',
      'What shifts if you meet them as theatre, not fact?',
    ],
  },

  created_and_discovered: {
    name: 'Created and Discovered',
    short_name: 'Create-Discover',
    short_desc: 'The image is both made and found—creation and discovery become "one action."',
    long_desc:
      'You participate in the image\'s arising, and yet it also feels as though it precedes you or has its own givenness. If you lean only on "created," it flattens into self-invention; only on "discovered," it can become rigid reification. The potency is the paradox held alive. This stance supports both responsibility (you\'re involved) and humility (you don\'t own it).',
    questions: [
      'Are you shaping them as they appear?',
      'Do they feel already there, waiting for you?',
      'Can you hold both creating and discovering at once?',
    ],
  },

  logos: {
    name: 'Logos',
    short_name: 'logos',
    short_desc:
      'Ideas are involved—about self, world, suffering, what something "is," etc., whether consciously or not.',
    long_desc:
      "Logos means the imaginal is never free of meaning-structures; concepts quietly shape how the image appears and how you relate. Sometimes ideas arrive explicitly as part of the image; often they're implicit assumptions in the background. Soulmaking works with logos rather than pretending it isn't there—refining it, loosening it, making it more beautiful and less imprisoning. When logos is held wisely, it clarifies without reducing.",
    questions: [
      'What ideas about them are shaping how you see them?',
      'If you changed your view, would they change?',
      'What belief about them feels too tight?',
    ],
  },

  not_reducible_to_a_single_meaning: {
    name: 'Not Reducible to a Single Meaning',
    short_name: 'not reducible',
    short_desc:
      'The image is meaningful, sometimes specifically so, but it never only means one thing and cannot be captured fully.',
    long_desc:
      'This node resists the impulse to "solve" the image. An image can point clearly to life-patterns or psyche-dynamics, yet still exceed any single explanation or cause. The more you try to reduce it, the more you lose its living richness. Non-reduction keeps the image inexhaustible, allowing further unfoldment and deeper resonances over time.',
    questions: [
      'Are you trying to pin them down to one meaning?',
      'What else might they mean?',
      'Can they remain more than your explanation?',
    ],
  },

  meaningfulness: {
    name: 'Meaningfulness',
    short_name: 'meaningfulness',
    short_desc:
      'The image is full of meanings—pregnant with infinite meanings, many beyond naming.',
    long_desc:
      "Meaningfulness isn't a single interpretation but a density of significance. Some meanings can be recognized and linked to life quite directly, while others remain tacit, sensed, or only gradually revealed. This abundance is part of what makes the image nourishing rather than merely interesting. Meaningfulness also invites patience: letting meanings ripen rather than forcing them.",
    questions: [
      'Do they feel dense with meaning?',
      'What meanings are ripening quietly in them?',
      'Can you sense more meaning than you can name?',
    ],
  },

  infinite_echoing_and_mirroring: {
    name: 'Infinite Echoing and Mirroring',
    short_name: 'infinite echoing',
    short_desc:
      'Image and life mirror and echo each other infinitely, some correspondences obvious, some hidden.',
    long_desc:
      'This node points to an ongoing reciprocity between imaginal world and lived world. Details in the image can reflect life situations, and life can in turn illuminate new layers of the image. The mirroring can be subtle and evolving, not a one-time decoding. Because it can be infinite, it keeps the relationship alive and deepening—more like an ongoing conversation than a solved puzzle.',
    questions: [
      'Where do they echo something in your life?',
      'How does your life reflect them back?',
      'Can you feel the mirroring moving both ways?',
    ],
  },

  grace: {
    name: 'Grace',
    short_name: 'grace',
    short_desc: 'The image is a grace—an inexplicable gift, given from beyond.',
    long_desc:
      "Grace is the felt sense of being gifted something you couldn't have manufactured by will. The image arrives with a quality of blessing or visitation. This can soften control and invite receptivity, devotion, and wonder. When grace is felt, the image is less likely to be treated as property and more likely to be honored as gift.",
    questions: [
      'Do they feel given rather than made?',
      'Can you receive them as a gift?',
      'What happens if you thank them?',
    ],
  },

  autonomy: {
    name: 'Autonomy',
    short_name: 'autonomy',
    short_desc: 'The image is not owned—it has its own autonomy (and you keep yours too).',
    long_desc:
      "Autonomy means the image can behave like a person: surprising you, resisting control, acting independently within the imaginal space. You don't possess it, and it isn't merely a part of \"me.\" Yet it's also clearly dependent on how you look—so autonomy and conditionality coexist. Importantly, your self-will remains intact: you are not possessed or overridden, and you can make heartful, sensible choices.",
    questions: [
      'Do they surprise you?',
      'Can they say no to you?',
      'Can you let them have their own will?',
    ],
  },

  twoness: {
    name: 'Twoness',
    short_name: 'twoness',
    short_desc:
      'Imaginal perception retains differentiation between self and image; particularities remain, even as they gain dimensions.',
    long_desc:
      "Twoness is the relational clarity that allows meeting, dialogue, love, reverence, and responsibility. Without it, the work can collapse into vague oneness where nothing has distinct value or claim. Twoness doesn't freeze identities; the sense of self and other can shift and deepen. But the differentiation remains enough for true relationship to live.",
    questions: [
      'Can they see you?',
      'Do you feel them as distinct from you?',
      'What happens between you, not just within you?',
    ],
  },

  participation: {
    name: 'Participation',
    short_name: 'participation',
    short_desc:
      "With the image, there's a sense of participation in something much bigger than us.",
    long_desc:
      'Participation means you are not merely observing an inner picture; you are involved in a larger field of meaning and being. The image feels like a gateway into a wider order—archetypal, sacred, or cosmic in tone. This participation can reshape how you are, not just what you see. It often brings seriousness and tenderness together: your presence matters, and the encounter asks for care.',
    questions: [
      'Do you feel part of something larger with them?',
      'Are they drawing you into a wider field?',
      'What bigger movement are you participating in together?',
    ],
  },

  fullness_of_intention: {
    name: 'Fullness of Intention',
    short_name: 'fullness of intention',
    short_desc:
      'The primary intention is serving soul and the image, with self-healing included but not centered.',
    long_desc:
      "Fullness of intention means the work isn't primarily for egoic gain, even if benefits occur. There's an orientation toward something larger—soulfulness, beauty, reverence, integrity in relationship with the imaginal. This intention can be cultivated even when you don't fully understand it yet. As it matures, it tends to make the work more ethical, more spacious, and less extractive.",
    questions: [
      'Are you serving them, or using them?',
      'What is your deepest intention toward them?',
      'Do they feel honored by how you relate?',
    ],
  },

  duty: {
    name: 'Duty',
    short_name: 'duty',
    short_desc:
      'There can be a sense: "I have a duty to this image," often refracting into life as choices and attitudes.',
    long_desc:
      "Duty here is rarely a literal command; it's more like a soul-obligation or responsibility arising from relationship. The image may ask for protection, devotion, truthfulness, restraint, courage, or care. Often the duty expresses itself indirectly through how you live and what you prioritize. Held imaginally, duty is nuanced and beautiful—not rigid moralism, but response-ability.",
    questions: [
      'What do they ask of you?',
      'Is there something you owe them?',
      'How might you live differently because of them?',
    ],
  },

  values: {
    name: 'Values',
    short_name: 'values',
    short_desc:
      'Moral, ethical, or aesthetic values are implicit in the image; they feel important or beautiful for life.',
    long_desc:
      "Values are woven into the image's meaningfulness: what it elevates, sanctifies, or calls forth. These values can be aesthetic (beauty, refinement, harmony) and ethical (courage, kindness, dignity, honesty). Over time, imaginal work can educate and expand one's sense of value beyond habitual cultural defaults. Values then become part of how the image shapes a life, not just how it feels in meditation.",
    questions: [
      'What do they value?',
      'What value do they awaken in you?',
      'Do they make something feel more important in life?',
    ],
  },

  eternality: {
    name: 'Eternality',
    short_name: 'eternality',
    short_desc:
      'The image partakes in a non-linear time: happening "now," yet also "always already," more like an icon than a narrative.',
    long_desc:
      "Eternality shifts the temporal sense from horizontal storyline to something iconic and ever-present. The image doesn't primarily unfold as plot; it's known as a timeless configuration. This can lend gravitas and sacredness without needing metaphysical claims. Eternality can coexist with change: images still transform, yet they can feel as though they belong to an eternal register.",
    questions: [
      'Do they feel timeless?',
      'Are they happening now and always?',
      'Can you sense them as an icon, not a story?',
    ],
  },

  less_fabrication: {
    name: 'Less Fabrication',
    short_name: 'less fabrication',
    short_desc:
      "There's some level of less fabrication (and less clinging) than usual perception, even if not dramatically less.",
    long_desc:
      "Less fabrication doesn't mean the image is unfabricated; it means the mind's constructing and clinging are lighter. The field is less forced, less gripped, more pliable. Because of this, images can breathe and evolve rather than crystallize into compulsive certainty. This node often supports the theatre-like quality and the created/discovered paradox: the experience is made, yet not tightly held.",
    questions: [
      'Is there less strain in holding them?',
      'Can you let them be without tightening?',
      'Do they breathe more when you loosen your grip?',
    ],
  },

  the_lattice: {
    name: 'The Lattice',
    short_name: 'the lattice',
    short_desc:
      '"Imaginal" isn\'t a thing in itself; it\'s a way of looking shaped by a whole constellation of these elements.',
    long_desc:
      'The Lattice names the whole configuration in which image, perceiver, and relationship co-arise. A "thing" may or may not be an imaginal image depending on how perception is informed by these elements. When several nodes are present together, the sensing becomes qualitatively different—more soulful, more dimensional, more alive. So the Lattice is both the map and the living pattern: the imaginal emerges as a constellation, not a single factor.',
    questions: [
      'Which elements are alive between you and them?',
      'What shifts if more of the lattice comes online?',
      'Can you sense the whole constellation, not just one strand?',
    ],
  },
}

export const elementKeys = Object.keys(elements)

const elementBaseColors: Record<string, string> = {
  energy_body_awareness: '#fbe6a0',
  loving_and_being_loved: '#d13466',
  eros: '#f34f45',
  beauty: '#dc6fe8',
  trust: '#2ba78f',
  towards_soulmaking_and_soulfulness: '#8650b5',
  dimensionality_shading_into_divinity: '#4b66c9',
  reverence: '#4d88c6',
  humility: '#7da1c4',
  a_sense_of_unfathomable_beyonds: '#3b4091',
  soft_and_elastic_edges: '#7fcbe2',
  concertina: '#7fd8b8',
  theatre_like_quality: '#956ae0',
  created_and_discovered: '#b2895d',
  logos: '#6b5a4f',
  not_reducible_to_a_single_meaning: '#6f617f',
  meaningfulness: '#936353',
  infinite_echoing_and_mirroring: '#3f8fa6',
  grace: '#c6aefb',
  autonomy: '#2f845f',
  twoness: '#5b8a3a',
  participation: '#4aa5e6',
  fullness_of_intention: '#c37b43',
  duty: '#7a553f',
  values: '#b1872b',
  eternality: '#5d66b3',
  less_fabrication: '#9acbe4',
  the_lattice: '#4a3b33',
}

function clampChannel(value: number) {
  return Math.max(0, Math.min(255, Math.round(value)))
}

function hexToRgb(hex: string) {
  const normalized = hex.replace('#', '')
  const value =
    normalized.length === 3
      ? normalized
          .split('')
          .map((char) => char + char)
          .join('')
      : normalized
  const r = Number.parseInt(value.slice(0, 2), 16)
  const g = Number.parseInt(value.slice(2, 4), 16)
  const b = Number.parseInt(value.slice(4, 6), 16)
  return { r, g, b }
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  const toHex = (channel: number) => clampChannel(channel).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

function mixWith(hex: string, mix: { r: number; g: number; b: number }, amount: number) {
  const base = hexToRgb(hex)
  const r = base.r + (mix.r - base.r) * amount
  const g = base.g + (mix.g - base.g) * amount
  const b = base.b + (mix.b - base.b) * amount
  return rgbToHex({ r, g, b })
}

function getLuminance(hex: string) {
  const { r, g, b } = hexToRgb(hex)
  const [rs, gs, bs] = [r, g, b].map((channel) => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function buildTagColor(hex: string): TagColor {
  const luminance = getLuminance(hex)
  const isDark = luminance < 0.55
  const text = isDark ? '#f8f3ed' : '#5a3b2a'
  const hover = isDark
    ? mixWith(hex, { r: 255, g: 255, b: 255 }, 0.12)
    : mixWith(hex, { r: 0, g: 0, b: 0 }, 0.12)
  return { bg: hex, text, hover }
}

export const elementTagColors: Record<string, TagColor> = Object.fromEntries(
  elementKeys.map((key) => [key, buildTagColor(elementBaseColors[key])]),
)
