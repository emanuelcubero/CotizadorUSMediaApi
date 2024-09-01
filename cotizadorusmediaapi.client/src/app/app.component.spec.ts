import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CampaignService } from './campaign.service';
import { Campaign } from './campaign';
=======
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;
<<<<<<< HEAD
  let campaignService: CampaignService;
=======
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
<<<<<<< HEAD
      imports: [HttpClientTestingModule],
      providers: [CampaignService] 
=======
      imports: [HttpClientTestingModule]
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
<<<<<<< HEAD
    campaignService = TestBed.inject(CampaignService); 
  });

  afterEach(() => {
    httpMock.verify(); 
=======
  });

  afterEach(() => {
    httpMock.verify();
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

<<<<<<< HEAD
  it('should retrieve campaigns from the server', () => {
    const mockCampaigns: Campaign[] = [
      {
        id: 1,
        vendedor: 'John Doe',
        cliente: 'Acme Corp',
        campania: 'Lanzamiento 2024',
        anunciante: 'Acme Corp',
        plataforma: 'Vevo',
        inversion: 50000,
        unidades: 100,
        margen: 10
      },
      {
        id: 2,
        vendedor: 'Jane Smith',
        cliente: 'Globex Corporation',
        campania: 'Promo de Verano',
        anunciante: 'Globex Corporation',
        plataforma: 'YouTube',
        inversion: 70000,
        unidades: 150,
        margen: 15
      }
    ];

    campaignService.getCampaigns().subscribe((campaigns) => {
      expect(campaigns).toEqual(mockCampaigns);
    });

    const req = httpMock.expectOne('/api/campaign'); 
    expect(req.request.method).toEqual('GET');
    req.flush(mockCampaigns); 
  });

  it('should create a new campaign', () => {
    const newCampaign: Campaign = {
      id: 3,
      vendedor: 'Alice Johnson',
      cliente: 'Initech',
      campania: 'Lanzamiento de Primavera',
      anunciante: 'Initech',
      plataforma: 'Spotify',
      inversion: 30000,
      unidades: 80,
      margen: 8
    };

    campaignService.createCampaign(newCampaign).subscribe((campaign) => {
      expect(campaign).toEqual(newCampaign);
    });

    const req = httpMock.expectOne('/api/campaign'); 
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newCampaign); 
    req.flush(newCampaign); 
  });
});
=======
  it('should retrieve weather forecasts from the server', () => {
    const mockForecasts = [
      { date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild' },
      { date: '2021-10-02', temperatureC: 25, temperatureF: 77, summary: 'Warm' }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/weatherforecast');
    expect(req.request.method).toEqual('GET');
    req.flush(mockForecasts);

    expect(component.forecasts).toEqual(mockForecasts);
  });
});
>>>>>>> 2987ff744217c3b6fe7b273c7d59191933685dbf
