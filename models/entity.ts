export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface DimensionDetail {
  depth_cm: number;
  depth_in: number;
  width_cm: number;
  width_in: number;
  height_cm: number;
  height_in: number;
  diameter_cm: number;
  diameter_in: number;
  clarification: string;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggesAutocompletAll {
  input: string[];
  weight?: number;
  contexts: {
    groupings: string[];
  };
}

export interface ArtWorkItem {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: null | string[];
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: null | number;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  description: null | string;
  dimensions: string;
  dimensions_detail: DimensionDetail[];
  medium_display: string;
  inscriptions: null | string;
  credit_line: string;
  catalogue_display: null | string;
  publication_history: null | string;
  exhibition_history: null | string;
  provenance_text: null | string;
  edition: null | string;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: null | number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: null | string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: null | number;
  longitude: null | number;
  latlon: null | string;
  is_on_view: boolean;
  on_loan_display: null | string;
  gallery_title: null | string;
  gallery_id: null | number;
  nomisma_id: null | string;
  artwork_interface_title: string;
  artwork_interface_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: null | string;
  style_title: null | string;
  alt_style_ids: string[];
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null | string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: null | string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: null | string;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: string[];
  sound_ids: string[];
  video_ids: string[];
  text_ids: string[];
  section_ids: string[];
  section_titles: string[];
  site_ids: string[];
  suggest_autocomplete_all: SuggesAutocompletAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface AllArtWorksResponse {
  pagination: Pagination;
  data: ArtWorkItem[];
}

export interface ArtWorksContenxtValue extends AllArtWorksResponse {
  status: {
    loading: boolean;
    error: string;
  };
  fetchArtWorksByPage: (page: number, limit: number) => Promise<void>;
  setPagination: React.Dispatch<React.SetStateAction<Pagination | undefined>>;
}
