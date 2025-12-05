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
  { key: "Thunderstorm", icon: "/weather/thunderstorm.png", label: "Thunderstorm" },
  { key: "Drizzle",     icon: "/weather/drizzle.png", label: "Drizzle" },
  { key: "Rain",        icon: "/weather/rain.png", label: "Rain" },
  { key: "Snow",        icon: "/weather/snow.png", label: "Snow" },
  { key: "Mist",        icon: "/weather/mist.png", label: "Mist" },
  { key: "Smoke",       icon: "/weather/smoke.png", label: "Smoke" },
  { key: "Haze",        icon: "/weather/haze.png", label: "Haze" },
  { key: "Dust",        icon: "/weather/dust.png", label: "Dust" },
  { key: "Fog",         icon: "/weather/fog.png", label: "Fog" },
  { key: "Sand",        icon: "/weather/sand.png", label: "Sand" },
  { key: "Ash",         icon: "/weather/ash.png", label: "Ash" },
  { key: "Squall",      icon: "/weather/squall.png", label: "Squall" },
  { key: "Tornado",     icon: "/weather/tornado.png", label: "Tornado" },
  { key: "Clear",       icon: "/weather/clear.png", label: "Clear" },
  { key: "Clouds",      icon: "/weather/clouds.png", label: "Clouds" }
];
