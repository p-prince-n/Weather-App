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
  { key: "Thunderstorm", icon: "/assets/weather/Thunderstorm.png", label: "Thunderstorm" },
  { key: "Drizzle",     icon: "/assets/weather/Drizzle.png", label: "Drizzle" },
  { key: "Rain",        icon: "/assets/weather/Rain.png", label: "Rain" },
  { key: "Snow",        icon: "/assets/weather/Snow.png", label: "Snow" },
  { key: "Mist",        icon: "/assets/weather/Mist.png", label: "Mist" },
  { key: "Smoke",       icon: "/assets/weather/Smoke.png", label: "Smoke" },
  { key: "Haze",        icon: "/assets/weather/Haze.png", label: "Haze" },
  { key: "Dust",        icon: "/assets/weather/Dust.png", label: "Dust" },
  { key: "Fog",         icon: "/assets/weather/Fog.png", label: "Fog" },
  { key: "Sand",        icon: "/assets/weather/Sand.png", label: "Sand" },
  { key: "Ash",         icon: "/assets/weather/Ash.png", label: "Ash" },
  { key: "Squall",      icon: "/assets/weather/Squall.png", label: "Squall" },
  { key: "Tornado",     icon: "/assets/weather/Tornado.png", label: "Tornado" },
  { key: "Clear",       icon: "/assets/weather/Clear.png", label: "Clear" },
  { key: "Clouds",      icon: "/assets/weather/Clouds.png", label: "Clouds" }
];
