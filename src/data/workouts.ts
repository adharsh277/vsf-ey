import type { WorkoutDayData } from '../types/workout'

const img = (query: string) =>
  `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80&${query}`

export const workouts: WorkoutDayData[] = [
  {
    key: 'monday',
    label: 'Monday',
    emoji: '💪',
    focus: 'Biceps',
    exercises: [
      { id: 'mon-barbell-curl', name: 'Barbell Curl', image: img('barbell-curl'), description: 'Classic exercise for building bicep strength and size.', targetMuscle: 'Biceps', sets: 4, reps: '10-12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Swinging the torso and using momentum.', tips: 'Keep elbows locked near your ribs and control the negative.' },
      { id: 'mon-dumbbell-curl', name: 'Dumbbell Curl', image: img('dumbbell-curl'), description: 'Improves arm symmetry and unilateral strength.', targetMuscle: 'Biceps', sets: 4, reps: '10-12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Curling too fast and lifting shoulders.', tips: 'Rotate palms fully upward at the top for better contraction.' },
      { id: 'mon-hammer-curl', name: 'Hammer Curl', image: img('hammer-curl'), description: 'Targets brachialis for thicker upper arms.', targetMuscle: 'Biceps / Brachialis', sets: 3, reps: '10-12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Wrists bending backward under load.', tips: 'Maintain a neutral wrist and slow lowering phase.' },
      { id: 'mon-preacher-curl', name: 'Preacher Curl', image: img('preacher-curl'), description: 'Strict curl movement that isolates biceps.', targetMuscle: 'Biceps', sets: 3, reps: '8-10', rest: '75 sec', difficulty: 'Intermediate', commonMistakes: 'Lifting elbows off the pad.', tips: 'Use full ROM and stop short of elbow hyperextension.' },
      { id: 'mon-cable-curl', name: 'Cable Curl', image: img('cable-curl'), description: 'Keeps constant tension throughout the curl.', targetMuscle: 'Biceps', sets: 3, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Leaning back to move heavier weight.', tips: 'Stand tall and squeeze peak contraction for one second.' },
      { id: 'mon-concentration-curl', name: 'Concentration Curl', image: img('concentration-curl'), description: 'Focused single-arm curl for mind-muscle connection.', targetMuscle: 'Biceps', sets: 3, reps: '10-12', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Shortening range at the bottom.', tips: 'Pause at the bottom and avoid bouncing.' },
      { id: 'mon-incline-dumbbell-curl', name: 'Incline Dumbbell Curl', image: img('incline-curl'), description: 'Stretches long head of the biceps for growth.', targetMuscle: 'Biceps', sets: 3, reps: '10-12', rest: '60 sec', difficulty: 'Intermediate', commonMistakes: 'Elbows drifting forward too early.', tips: 'Keep shoulders pinned to the bench throughout.' },
      { id: 'mon-reverse-curl', name: 'Reverse Curl', image: img('reverse-curl'), description: 'Builds forearm strength while training biceps.', targetMuscle: 'Biceps / Forearms', sets: 3, reps: '12', rest: '60 sec', difficulty: 'Intermediate', commonMistakes: 'Allowing wrists to collapse inward.', tips: 'Use lighter load and keep knuckles facing up.' },
    ],
  },
  {
    key: 'tuesday',
    label: 'Tuesday',
    emoji: '🔥',
    focus: 'Triceps',
    exercises: [
      { id: 'tue-pushdown', name: 'Tricep Pushdown', image: img('tricep-pushdown'), description: 'A staple cable movement for tricep definition.', targetMuscle: 'Triceps', sets: 4, reps: '10-12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Moving elbows forward while pressing down.', tips: 'Pin elbows to sides and spread rope at the bottom.' },
      { id: 'tue-skull-crushers', name: 'Skull Crushers', image: img('skull-crushers'), description: 'Excellent for long-head tricep development.', targetMuscle: 'Triceps', sets: 3, reps: '8-10', rest: '75 sec', difficulty: 'Intermediate', commonMistakes: 'Flaring elbows too wide.', tips: 'Lower bar behind forehead and keep upper arm stable.' },
      { id: 'tue-bench-dips', name: 'Bench Dips', image: img('bench-dips'), description: 'Bodyweight move for triceps and pressing stamina.', targetMuscle: 'Triceps', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Dropping shoulders too deep causing strain.', tips: 'Stop when elbows reach about 90 degrees.' },
      { id: 'tue-close-grip-bench', name: 'Close Grip Bench Press', image: img('close-grip-bench'), description: 'Compound lift emphasizing triceps lockout strength.', targetMuscle: 'Triceps / Chest', sets: 4, reps: '6-8', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Hands placed too close, stressing wrists.', tips: 'Use shoulder-width grip and tuck elbows slightly.' },
      { id: 'tue-overhead-extension', name: 'Overhead Extension', image: img('overhead-extension'), description: 'Targets triceps through a full stretch position.', targetMuscle: 'Triceps', sets: 3, reps: '10-12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Arching lower back excessively.', tips: 'Brace core and keep elbows pointing forward.' },
      { id: 'tue-rope-pushdown', name: 'Rope Pushdown', image: img('rope-pushdown'), description: 'Cable isolation with strong end-range squeeze.', targetMuscle: 'Triceps', sets: 3, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Cutting reps short at top and bottom.', tips: 'Control both directions and fully extend each rep.' },
      { id: 'tue-kickback', name: 'Dumbbell Kickback', image: img('dumbbell-kickback'), description: 'Great finisher for tricep detail and endurance.', targetMuscle: 'Triceps', sets: 3, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Swinging the arm from shoulder.', tips: 'Keep upper arm parallel to floor and extend only at elbow.' },
    ],
  },
  {
    key: 'wednesday',
    label: 'Wednesday',
    emoji: '🏋️',
    focus: 'Chest',
    exercises: [
      { id: 'wed-bench-press', name: 'Bench Press', image: img('bench-press'), description: 'Primary chest strength builder.', targetMuscle: 'Chest', sets: 4, reps: '6-8', rest: '120 sec', difficulty: 'Intermediate', commonMistakes: 'Bouncing bar off chest.', tips: 'Keep shoulder blades retracted and feet planted.' },
      { id: 'wed-incline-bench', name: 'Incline Bench Press', image: img('incline-bench'), description: 'Emphasizes upper chest development.', targetMuscle: 'Upper Chest', sets: 4, reps: '8-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Bench angle too high, turning into shoulder press.', tips: 'Set bench at 30 to 45 degrees.' },
      { id: 'wed-decline-bench', name: 'Decline Bench Press', image: img('decline-bench'), description: 'Targets lower chest fibers effectively.', targetMuscle: 'Lower Chest', sets: 3, reps: '8-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Losing control during unrack.', tips: 'Use spotter and controlled descent.' },
      { id: 'wed-dumbbell-press', name: 'Dumbbell Press', image: img('dumbbell-press'), description: 'Builds balanced chest strength side to side.', targetMuscle: 'Chest', sets: 3, reps: '10-12', rest: '75 sec', difficulty: 'Beginner', commonMistakes: 'Pressing dumbbells in an uneven path.', tips: 'Drive both arms up together and avoid elbow flare.' },
      { id: 'wed-push-ups', name: 'Push Ups', image: img('push-ups'), description: 'Bodyweight chest movement for volume and endurance.', targetMuscle: 'Chest / Triceps', sets: 3, reps: '15-20', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Sagging hips and partial reps.', tips: 'Keep straight plank and chest close to floor.' },
      { id: 'wed-chest-fly', name: 'Chest Fly', image: img('chest-fly'), description: 'Isolation move for chest stretch and squeeze.', targetMuscle: 'Chest', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Dropping elbows too low.', tips: 'Maintain slight elbow bend and controlled arc.' },
      { id: 'wed-pec-deck', name: 'Pec Deck', image: img('pec-deck'), description: 'Machine-based chest isolation for safe volume.', targetMuscle: 'Chest', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Shrugging shoulders during squeeze.', tips: 'Keep chest tall and shoulder blades down.' },
      { id: 'wed-cable-fly', name: 'Cable Fly', image: img('cable-fly'), description: 'Constant-tension fly variation from multiple angles.', targetMuscle: 'Chest', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Intermediate', commonMistakes: 'Stepping too far forward and losing control.', tips: 'Use staggered stance and slow tempo.' },
    ],
  },
  {
    key: 'thursday',
    label: 'Thursday',
    emoji: '🪽',
    focus: 'Back',
    exercises: [
      { id: 'thu-lat-pulldown', name: 'Lat Pulldown', image: img('lat-pulldown'), description: 'Builds back width and improves pulling strength.', targetMuscle: 'Lats', sets: 4, reps: '10-12', rest: '75 sec', difficulty: 'Beginner', commonMistakes: 'Pulling bar behind neck.', tips: 'Pull bar to upper chest with slight lean.' },
      { id: 'thu-pull-ups', name: 'Pull Ups', image: img('pull-ups'), description: 'Top bodyweight movement for upper back strength.', targetMuscle: 'Lats / Upper Back', sets: 4, reps: '6-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Using excessive kipping.', tips: 'Start from dead hang and drive elbows down.' },
      { id: 'thu-seated-row', name: 'Seated Row', image: img('seated-row'), description: 'Targets mid-back and improves posture.', targetMuscle: 'Mid Back', sets: 3, reps: '10-12', rest: '75 sec', difficulty: 'Beginner', commonMistakes: 'Rounding lower back while rowing.', tips: 'Keep spine neutral and pull to lower ribs.' },
      { id: 'thu-barbell-row', name: 'Barbell Row', image: img('barbell-row'), description: 'Heavy compound movement for total back mass.', targetMuscle: 'Back / Rear Delts', sets: 4, reps: '8-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Standing too upright and jerking weight.', tips: 'Hinge at hips and row with controlled torso.' },
      { id: 'thu-deadlift', name: 'Deadlift', image: img('deadlift'), description: 'Full posterior-chain strength movement.', targetMuscle: 'Back / Glutes / Hamstrings', sets: 4, reps: '5', rest: '150 sec', difficulty: 'Advanced', commonMistakes: 'Rounding lumbar spine off floor.', tips: 'Brace core hard and keep bar close to shins.' },
      { id: 'thu-cable-row', name: 'Cable Row', image: img('cable-row'), description: 'Smooth machine row with adjustable grip positions.', targetMuscle: 'Mid Back', sets: 3, reps: '12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Leaning too far back each rep.', tips: 'Initiate pull with shoulder blades, not biceps.' },
      { id: 'thu-dumbbell-row', name: 'Dumbbell Row', image: img('dumbbell-row'), description: 'Single-arm row to correct imbalances.', targetMuscle: 'Lats / Rhomboids', sets: 3, reps: '10-12 each side', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Twisting torso aggressively.', tips: 'Keep hips square and pull elbow toward hip.' },
      { id: 'thu-straight-arm-pulldown', name: 'Straight Arm Pulldown', image: img('straight-arm-pulldown'), description: 'Isolation drill for lats and scapular control.', targetMuscle: 'Lats', sets: 3, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Bending elbows too much.', tips: 'Keep soft elbows and sweep bar to thighs.' },
    ],
  },
  {
    key: 'friday',
    label: 'Friday',
    emoji: '⚡',
    focus: 'Shoulders',
    exercises: [
      { id: 'fri-shoulder-press', name: 'Shoulder Press', image: img('shoulder-press'), description: 'Main overhead pressing movement for delts.', targetMuscle: 'Shoulders', sets: 4, reps: '8-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Overarching lower back.', tips: 'Squeeze glutes and keep ribs down while pressing.' },
      { id: 'fri-arnold-press', name: 'Arnold Press', image: img('arnold-press'), description: 'Rotational press hitting all delt heads.', targetMuscle: 'Shoulders', sets: 3, reps: '10-12', rest: '75 sec', difficulty: 'Intermediate', commonMistakes: 'Moving too fast through rotation.', tips: 'Control the twist and press in one fluid path.' },
      { id: 'fri-lateral-raise', name: 'Lateral Raise', image: img('lateral-raise'), description: 'Best isolation for wider shoulders.', targetMuscle: 'Side Delts', sets: 4, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Shrugging traps to lift weight.', tips: 'Lead with elbows and stop at shoulder height.' },
      { id: 'fri-front-raise', name: 'Front Raise', image: img('front-raise'), description: 'Targets anterior delts for front shoulder strength.', targetMuscle: 'Front Delts', sets: 3, reps: '12', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Swinging from hips.', tips: 'Raise with controlled tempo and slight bend at elbows.' },
      { id: 'fri-rear-delt-fly', name: 'Rear Delt Fly', image: img('rear-delt-fly'), description: 'Improves rear shoulder development and posture.', targetMuscle: 'Rear Delts', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Turning it into row by bending elbows too much.', tips: 'Think of spreading arms wide, not pulling back.' },
      { id: 'fri-face-pull', name: 'Face Pull', image: img('face-pull'), description: 'Great for rotator cuff health and rear delts.', targetMuscle: 'Rear Delts / Upper Back', sets: 3, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Pulling rope to chest instead of face.', tips: 'Pull high and rotate thumbs behind ears.' },
      { id: 'fri-upright-row', name: 'Upright Row', image: img('upright-row'), description: 'Builds shoulders and traps with vertical pull.', targetMuscle: 'Shoulders / Traps', sets: 3, reps: '10-12', rest: '60 sec', difficulty: 'Intermediate', commonMistakes: 'Using grip too narrow causing wrist discomfort.', tips: 'Use moderate grip width and stop at upper chest.' },
    ],
  },
  {
    key: 'saturday',
    label: 'Saturday',
    emoji: '🦵',
    focus: 'Legs',
    exercises: [
      { id: 'sat-squat', name: 'Squat', image: img('squat'), description: 'Primary lower-body strength movement.', targetMuscle: 'Quads / Glutes', sets: 4, reps: '6-8', rest: '120 sec', difficulty: 'Intermediate', commonMistakes: 'Knees collapsing inward.', tips: 'Push knees out and brace before each rep.' },
      { id: 'sat-leg-press', name: 'Leg Press', image: img('leg-press'), description: 'Controlled heavy quad volume.', targetMuscle: 'Quads', sets: 4, reps: '10-12', rest: '90 sec', difficulty: 'Beginner', commonMistakes: 'Lower back rounding at bottom.', tips: 'Do not lower deeper than your pelvis can stay neutral.' },
      { id: 'sat-rdl', name: 'Romanian Deadlift', image: img('romanian-deadlift'), description: 'Hamstring and glute hinge movement.', targetMuscle: 'Hamstrings / Glutes', sets: 4, reps: '8-10', rest: '90 sec', difficulty: 'Intermediate', commonMistakes: 'Turning it into squat by bending knees too much.', tips: 'Hinge hips back and keep bar close to legs.' },
      { id: 'sat-lunges', name: 'Lunges', image: img('lunges'), description: 'Improves unilateral leg strength and stability.', targetMuscle: 'Quads / Glutes', sets: 3, reps: '10 each side', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Short steps stressing front knee.', tips: 'Take long enough stride to keep shin mostly vertical.' },
      { id: 'sat-leg-curl', name: 'Leg Curl', image: img('leg-curl'), description: 'Isolation movement for hamstrings.', targetMuscle: 'Hamstrings', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Using momentum and lifting hips.', tips: 'Pause and squeeze at top of each rep.' },
      { id: 'sat-leg-extension', name: 'Leg Extension', image: img('leg-extension'), description: 'Targets quads with controlled tension.', targetMuscle: 'Quads', sets: 3, reps: '12-15', rest: '60 sec', difficulty: 'Beginner', commonMistakes: 'Locking knees aggressively.', tips: 'Stop just short of full lockout and control descent.' },
      { id: 'sat-standing-calf-raise', name: 'Standing Calf Raise', image: img('standing-calf-raise'), description: 'Builds gastrocnemius and ankle strength.', targetMuscle: 'Calves', sets: 4, reps: '12-15', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Bouncing through reps.', tips: 'Pause at top and stretch fully at bottom.' },
      { id: 'sat-seated-calf-raise', name: 'Seated Calf Raise', image: img('seated-calf-raise'), description: 'Targets soleus for fuller calves.', targetMuscle: 'Calves', sets: 4, reps: '15-20', rest: '45 sec', difficulty: 'Beginner', commonMistakes: 'Using only partial range.', tips: 'Use slow tempo and full ankle motion.' },
    ],
  },
  {
    key: 'sunday',
    label: 'Sunday',
    emoji: '😴',
    focus: 'Rest Day',
    isRestDay: true,
    exercises: [],
  },
]

export const recoveryTips = [
  'Hydrate with at least 2.5 to 3 liters of water through the day.',
  'Sleep 7 to 9 hours for muscle repair and hormonal recovery.',
  'Do 10 to 15 minutes of mobility or light stretching.',
  'Take a 20 to 40 minute easy walk to boost blood flow.',
  'Plan meals with enough protein and micronutrients.',
]
