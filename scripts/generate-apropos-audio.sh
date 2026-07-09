#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/audio"
TMP="$OUT/.tmp-aiff"

mkdir -p "$OUT" "$TMP"

generate() {
  local locale="$1"
  local voice="$2"
  local rate="$3"
  local input="$ROOT/scripts/apropos-${locale}-narration.txt"
  local aiff="$TMP/apropos-${locale}.aiff"
  local mp3="$OUT/apropos-${locale}.mp3"

  say -v "$voice" -r "$rate" -f "$input" -o "$aiff"
  ffmpeg -y -loglevel error -i "$aiff" -codec:a libmp3lame -qscale:a 3 "$mp3"
  rm -f "$aiff"
  echo "Generated $mp3"
}

generate zh Tingting 158
generate fr Thomas 165
generate en Samantha 165

rmdir "$TMP" 2>/dev/null || true
