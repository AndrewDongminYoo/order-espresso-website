import { openingHours } from '@/lib/site';

export type AmbientMode = 'open' | 'after-hours';
export type AmbientPreference = 'auto' | AmbientMode;

export const ambientTimeZone = 'Asia/Seoul';

const seoulClock = new Intl.DateTimeFormat('en-US', {
  timeZone: ambientTimeZone,
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

function toMinutes(time: string) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}

export function createAmbientInitializationScript() {
  const schedule = JSON.stringify(openingHours);

  return `(() => {
    const root = document.documentElement;
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: '${ambientTimeZone}',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
    const schedules = ${schedule};
    const currentSchedule = schedules.find((item) => item.days.includes(values.weekday));
    const toMinutes = (time) => {
      const [hour, minute] = time.split(':').map(Number);
      return hour * 60 + minute;
    };
    const currentTime = Number(values.hour) * 60 + Number(values.minute);
    const automaticMode = currentSchedule &&
      currentTime >= toMinutes(currentSchedule.opens) &&
      currentTime < toMinutes(currentSchedule.closes)
        ? 'open'
        : 'after-hours';

    root.dataset.ambientPreference = 'auto';
    root.dataset.ambient = automaticMode;
  })();`;
}

export function getAutomaticAmbientMode(now: Date): AmbientMode {
  const parts = seoulClock.formatToParts(now);
  const weekday = parts.find((part) => part.type === 'weekday')?.value;
  const hour = Number(parts.find((part) => part.type === 'hour')?.value);
  const minute = Number(parts.find((part) => part.type === 'minute')?.value);
  const schedule = openingHours.find((item) =>
    item.days.some((day) => day === weekday),
  );

  if (!schedule) return 'after-hours';

  const currentTime = hour * 60 + minute;
  return currentTime >= toMinutes(schedule.opens) &&
    currentTime < toMinutes(schedule.closes)
    ? 'open'
    : 'after-hours';
}

export function resolveAmbientMode(
  preference: AmbientPreference,
  now: Date,
): AmbientMode {
  return preference === 'auto' ? getAutomaticAmbientMode(now) : preference;
}
