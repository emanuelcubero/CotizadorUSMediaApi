namespace CotizadorUSMediaApi.Server.Models
{
    public class Campaign
    {
        public int Id { get; set; }
        public string? Vendedor { get; set; } 
        public string Cliente { get; set; } = string.Empty; 
        public string Campa�a { get; set; } = string.Empty;
        public string Anunciante { get; set; } = string.Empty;
        public string Plataforma { get; set; } = string.Empty;
        public decimal Inversi�n { get; set; }
        public int Unidades { get; set; }
        public decimal Margen { get; set; }
    }

}

