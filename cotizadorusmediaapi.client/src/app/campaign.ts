export class Campaign {
  id: number;
  vendedor: string;
  cliente: string;
  campania: string;  
  anunciante: string;
  plataforma: string;
  inversion: number;  
  unidades: number;
  margen: number;

  constructor() {
    this.id = 0;
    this.vendedor = '';
    this.cliente = '';
    this.campania = ''; 
    this.anunciante = '';
    this.plataforma = '';
    this.inversion = 0;  
    this.unidades = 0;
    this.margen = 0;
  }
}



