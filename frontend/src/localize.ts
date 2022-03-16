import { de, enUS, tr, fr, nb, fi, id, pl, pt, it } from 'date-fns/locale'

export function getLocale(language: string): Locale {
  switch (language) {
    case 'de':
      return de
    case 'en':
      return enUS
    case 'fr':
      return fr
    case 'nb_NO':
      return nb
    case 'tr':
      return tr
    case 'fi':
      return fi
    case 'id':
      return id
    case 'it':
      return it
    case 'pl':
      return pl
    case 'pt_BR':
      return pt

    default:
      return enUS
  }
}

export function getLocaleString(language: string): string {
  switch (language) {
    case 'de':
      return 'de_DE'
    case 'en':
      return 'en_US'
    case 'fr':
      return 'fr_FR'
    case 'nb_NO':
      return 'nb_NO'
    case 'tr':
      return 'tr_TR'
    case 'fi':
      return 'fi_FI'
    case 'id':
      return 'id_ID'
    case 'it':
      return 'it_IT'
    case 'pl':
      return 'pl_PL'
    case 'pt_BR':
      return 'pt_BR'

    default:
      return 'en_US'
  }
}