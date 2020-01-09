'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' : 'data-target="#xs-controllers-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' :
                                            'id="xs-controllers-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' : 'data-target="#xs-injectables-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' :
                                        'id="xs-injectables-links-module-AuthModule-5cb759dc43512dc109c1045d24da94e2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CitiesModule.html" data-type="entity-link">CitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' : 'data-target="#xs-controllers-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' :
                                            'id="xs-controllers-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' }>
                                            <li class="link">
                                                <a href="controllers/CitiesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CitiesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' : 'data-target="#xs-injectables-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' :
                                        'id="xs-injectables-links-module-CitiesModule-76027c34f2420a42f670ee11d38f897c"' }>
                                        <li class="link">
                                            <a href="injectables/CitiesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CountriesModule.html" data-type="entity-link">CountriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' : 'data-target="#xs-controllers-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' :
                                            'id="xs-controllers-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' }>
                                            <li class="link">
                                                <a href="controllers/CountriesController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' : 'data-target="#xs-injectables-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' :
                                        'id="xs-injectables-links-module-CountriesModule-be7f63f6de27baa7e63d23237d78226e"' }>
                                        <li class="link">
                                            <a href="injectables/CountriesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CountriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ElasticSearchModule.html" data-type="entity-link">ElasticSearchModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ElasticSearchModule-6eb207afd2a74fdc50295fe53393a401"' : 'data-target="#xs-injectables-links-module-ElasticSearchModule-6eb207afd2a74fdc50295fe53393a401"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ElasticSearchModule-6eb207afd2a74fdc50295fe53393a401"' :
                                        'id="xs-injectables-links-module-ElasticSearchModule-6eb207afd2a74fdc50295fe53393a401"' }>
                                        <li class="link">
                                            <a href="injectables/ElasticSearchService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ElasticSearchService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RestaurantsModule.html" data-type="entity-link">RestaurantsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' : 'data-target="#xs-controllers-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' :
                                            'id="xs-controllers-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' }>
                                            <li class="link">
                                                <a href="controllers/RestaurantsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RestaurantsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' : 'data-target="#xs-injectables-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' :
                                        'id="xs-injectables-links-module-RestaurantsModule-2df08b890d7ae882268435588673fbef"' }>
                                        <li class="link">
                                            <a href="injectables/RestaurantsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestaurantsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' : 'data-target="#xs-controllers-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' :
                                            'id="xs-controllers-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' : 'data-target="#xs-injectables-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' :
                                        'id="xs-injectables-links-module-UsersModule-e4bac9d355c7a0469cc25412c7675bdd"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link">AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CitiesController.html" data-type="entity-link">CitiesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CountriesController.html" data-type="entity-link">CountriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RestaurantsController.html" data-type="entity-link">RestaurantsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link">UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AcceptedException.html" data-type="entity-link">AcceptedException</a>
                            </li>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link">AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDtoClass.html" data-type="entity-link">BaseDtoClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link">ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CityDto.html" data-type="entity-link">CityDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocationDto.html" data-type="entity-link">LocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterNewUserDto.html" data-type="entity-link">RegisterNewUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RestaurantDto.html" data-type="entity-link">RestaurantDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RestaurantsSearchDto.html" data-type="entity-link">RestaurantsSearchDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link">UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CitiesService.html" data-type="entity-link">CitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CitiesService-1.html" data-type="entity-link">CitiesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountriesService.html" data-type="entity-link">CountriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeleteFieldsInterceptor.html" data-type="entity-link">DeleteFieldsInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElasticSearchService.html" data-type="entity-link">ElasticSearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JoiValidatorPipe.html" data-type="entity-link">JoiValidatorPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link">LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MongoPointToObjectInterceptor.html" data-type="entity-link">MongoPointToObjectInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ObjectToMongoPointPipe.html" data-type="entity-link">ObjectToMongoPointPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParseToObjectPipe.html" data-type="entity-link">ParseToObjectPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestaurantsService.html" data-type="entity-link">RestaurantsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link">UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link">RolesGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IChangePassword.html" data-type="entity-link">IChangePassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICity.html" data-type="entity-link">ICity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILocation.html" data-type="entity-link">ILocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMongoPoint.html" data-type="entity-link">IMongoPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRestaurant.html" data-type="entity-link">IRestaurant</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserJWT.html" data-type="entity-link">IUserJWT</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});