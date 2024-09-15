import gppImage from '@/assets/projects/gpp.png'
import winterLeagueImage from '@/assets/projects/winter-league.png'
import tournamentRatingImage from '@/assets/projects/tournament-rating.png'
import engagePlusImage from '@/assets/projects/engage.png'
import matchupImage from '@/assets/projects/matchup.png'
import rivaldexImage from '@/assets/projects/rival-dex.png'
import herowindImage from '@/assets/projects/hero-wind.png'

export const PROJECTS = [
  {
    title: 'Gamepoint Performance',
    url: 'https://www.gamepointperformance.com/',
    background: 'bg-slate-900',
    image: gppImage,
    alt: 'Gamepoint Performance logo.',
    description: `Website redesign and signup feature implementation for Gamepoint Performance's online training business.`,
    stack: ['Resend', 'Supabase', 'React hook form'],
  },
  {
    title: 'Minneapolis Winter League',
    url: 'https://www.mplswinterleague.com/',
    background: 'bg-blue-400',
    image: winterLeagueImage,
    alt: 'Cloudy white sphere resembling a snowball.',
    description:
      'Feature rich webapp for a local ultimate frisbee community league. Signup, register, or create a team with friends!',
    stack: ['Firebase', 'Dropbox Sign', 'Stripe'],
  },
  {
    title: 'Tournament Rating System',
    url: 'https://tundra-santa.vercel.app/',
    background: 'bg-emerald-400',
    image: tournamentRatingImage,
    alt: 'Three filled circles in increasing size.',
    description:
      'Applied statistical analysis to large multiplayer data set for online board game tournaments.',
    stack: ['Next.js', 'Python', 'Supabase'],
  },
  {
    title: 'Engage Plus',
    url: 'https://engageplus.vercel.app/',
    background: 'bg-red-500',
    image: engagePlusImage,
    alt: 'Video game character in a fighting stance',
    description:
      'Data visualization project with large data sets, high interactivity, and feature rich UI.',
    stack: ['TypeScript', 'Custom Hooks', 'Tailwind CSS'],
  },
  {
    title: 'Matchup Project',
    url: 'https://balanced-workforce.vercel.app/',
    background: 'bg-orange-400',
    image: matchupImage,
    alt: 'Blue diamond',
    description:
      'A public voting experiment to determine the balance of various match-ups in the board game "Scythe".',
    stack: ['Animation', 'Supabase', 'Edge functions'],
  },
  {
    title: 'Rival Dex',
    url: 'https://rival-dex.vercel.app/',
    background: 'bg-violet-500',
    image: rivaldexImage,
    alt: 'Gary Oak standing confidently with hand solute',
    description:
      'Pokémon API inspired webapp complete with data visualization, multi-method authentication, and several UI themes.',
    stack: ['Firebase', 'Authentication', 'Local storage'],
  },
  {
    title: 'Hero Wind',
    url: 'https://hero-wind.vercel.app/',
    background: 'bg-yellow-400',
    image: herowindImage,
    alt: 'Wonder Woman arms crossed, smiling',
    description:
      'LLM data set analyzed with recharts and filtered searching capability with the added bonus of a superhero theme.',
    stack: ['Superhero API', 'Radix', 'Stitches'],
  },
]
