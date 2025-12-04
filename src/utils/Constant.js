import {
Sun,
Moon,
Cloud,
CloudRain,
CloudSnow,
CloudFog,
CloudDrizzle,
Wind,
Zap,
Thermometer,
RotateCw,
SunDim
} from "lucide-react";

export const WEATHER_ICONS = [
{ key: "Thunderstorm", Icon: Zap, label: "Thunderstorm" },
{ key: "Drizzle", Icon: CloudDrizzle, label: "Drizzle" },
{ key: "Rain", Icon: CloudRain, label: "Rain" },
{ key: "Snow", Icon: CloudSnow, label: "Snow" },
{ key: "Mist", Icon: CloudFog, label: "Mist" },
{ key: "Smoke", Icon: Cloud, label: "Smoke" },
{ key: "Haze", Icon: SunDim, label: "Haze" },
{ key: "Dust", Icon: Wind, label: "Dust" },
{ key: "Fog", Icon: CloudFog, label: "Fog" },
{ key: "Sand", Icon: Wind, label: "Sand" },
{ key: "Ash", Icon: Thermometer, label: "Ash" },
{ key: "Squall", Icon: Wind, label: "Squall" },
{ key: "Tornado", Icon: RotateCw, label: "Tornado" },
{ key: "Clear", Icon: Sun, label: "Clear" },
{ key: "Clouds", Icon: Cloud, label: "Clouds" }
];

export const WEATHER_IMG_LIST = [
  { key: "Thunderstorm", icon: new URL("../assets/weather/thunderstorm.png", import.meta.url).href, label: "Thunderstorm" },
  { key: "Drizzle",     icon: new URL("../assets/weather/drizzle.png", import.meta.url).href, label: "Drizzle" },
  { key: "Rain",        icon: new URL("../assets/weather/rain.png", import.meta.url).href, label: "Rain" },
  { key: "Snow",        icon: new URL("../assets/weather/snow.png", import.meta.url).href, label: "Snow" },
  { key: "Mist",        icon: new URL("../assets/weather/mist.png", import.meta.url).href, label: "Mist" },
  { key: "Smoke",       icon: new URL("../assets/weather/smoke.png", import.meta.url).href, label: "Smoke" },
  { key: "Haze",        icon: new URL("../assets/weather/haze.png", import.meta.url).href, label: "Haze" },
  { key: "Dust",        icon: new URL("../assets/weather/dust.png", import.meta.url).href, label: "Dust" },
  { key: "Fog",         icon: new URL("../assets/weather/fog.png", import.meta.url).href, label: "Fog" },
  { key: "Sand",        icon: new URL("../assets/weather/sand.png", import.meta.url).href, label: "Sand" },
  { key: "Ash",         icon: new URL("../assets/weather/ash.png", import.meta.url).href, label: "Ash" },
  { key: "Squall",      icon: new URL("../assets/weather/squall.png", import.meta.url).href, label: "Squall" },
  { key: "Tornado",     icon: new URL("../assets/weather/tornado.png", import.meta.url).href, label: "Tornado" },
  { key: "Clear",       icon: new URL("../assets/weather/clear.png", import.meta.url).href, label: "Clear" },
  { key: "Clouds",      icon: new URL("../assets/weather/clouds.png", import.meta.url).href, label: "Clouds" }
];
