import React from 'react';
import styled from "styled-components"
import {AiFillPhone, AiFillMail, AiFillHeart} from 'react-icons/ai';
import {FaBlogger} from 'react-icons/fa';
import ResumeProfileIcon from "./ResumeProfileIcon"

const pointColor: string = "#93CF51";

interface ResumeSubTitleBoxProps {
  small?: boolean;
  main?: boolean;
}
interface ResumePointListProps {
  tab?: boolean;
}

const ResumeComp: React.FC = () => {
    return (
        <ResumeWrap>
          <article>
            <ResumeTitleBox>
              <div className={"___title"}>안녕하세요<br/>코딩이 즐거운 <span className={"--pointColor"}>이낙원</span> 입니다</div>
              <div className={"___info"}>
                <ul>
                  <li><AiFillHeart/>&nbsp;&nbsp;1986.10.20</li>
                  <li><AiFillPhone/>&nbsp;&nbsp;010.9930.5837</li>
                  <li><AiFillMail/>&nbsp;&nbsp;robinnwpa@gmail.com</li>
                  <li><FaBlogger/>&nbsp;&nbsp;https://2Paradise.github.io</li>
                </ul>
              </div>
            </ResumeTitleBox>
            <ResumeSubTitleBox main><span className={"--pointColor"}>I</span>ntroduce</ResumeSubTitleBox>
            <ResumeDivider/>
            <ResumePointList>
                <li>Education 단국대학교 (죽전) 토목환경공학과 졸업</li>
            </ResumePointList>
            <ResumeIntroWrap>
              <div className={"___leftbox"}>
                <div className={"___imgbox"}>
                  <img src={"/profile.png"}/>
                </div>
                <ResumeProfileIcon/>
              </div>
              <ResumeTextDefault>
              안녕하세요, 저는 개발에 대한 무한한 매력에 빠져 사는 개발자 이낙원입니다. 저에게 개발이란 단순히 직업을 넘어서, 새로운 것을 만들어내는 창조적인 과정이며, 그 과정 속에서 발견하는 끊임없는 학습과 성장의 기회입니다.
              <br/><br/>SI 업계에서의 근무 경험은 저에게 Backend와 Frontend를 아우르는 다양한 기술 스택과 프로젝트 관리 능력을 갖추게 해주었습니다. 잦은 야근과 업무량 속에서도, 저는 제가 하는 일에서 즐거움을 찾았고, 이는 저를 더욱 강한 개발자로 만들어주었습니다.
              <br/><br/>그 후, 저는 제 열정을 Frontend 개발에 집중하기로 결심했습니다. 그린랩스에서의 경험은 저에게 함수형 언어인 Rescript와 GraphQL을 사용한 프로젝트에 참여할 기회를 주었고, 이는 저의 기술 스택을 풍부하게 해주었습니다. Rescript를 통해 저는 강력한 타입 추론과 명확한 코드 작성의 중요성을 배웠고, GraphQL을 통해서는 데이터를 효율적으로 쿼리하고 관리하는 현대적인 방법에 대해 귀중한 경험을 얻었습니다.
              <br/><br/>새로운 기술을 배우는 것에 대한 두려움이 없는 저는, 항상 최신 트렌드를 따라가며, 좋은 코드를 작성하기 위해 깊은 고민과 연구를 즐깁니다. 사용자 경험을 최우선으로 생각하며, 제가 하는 모든 개발 작업에 헌신합니다.
              <br/><br/>저는 계속해서 새로운 도전을 통해 성장하고자 합니다. 기술적 한계를 넘어서는 것을 목표로 하며, 저의 지식과 열정이 팀과 프로젝트에 긍정적인 영향을 미칠 수 있기를 바랍니다. 개발자로서의 여정은 결코 쉽지 않지만, 그 여정 속에서 저는 제 자신을 발견하고, 끊임없이 발전해 나가고 있습니다.
              </ResumeTextDefault>
            </ResumeIntroWrap>
            <ResumeSubTitleBox main><span className={"--pointColor"}>S</span>kills</ResumeSubTitleBox>
            <ResumeDivider/>
            <ResumeSubTitleBox>Front-End<span className={"--pointColor"}>.</span></ResumeSubTitleBox>
            <ResumeSubTitleBox small>CSS/HTML</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>적절한 HTML 요소를 사용하는 시맨틱 마크업을 준수합니다.</li>
              <li>다양한 플랫폼 및 브라우저를 고려한 CSS 사용이 가능합니다.</li>
              <li>BEM CSS 방법론을 적용하여 CSS 코드 작성을 지향합니다.</li>
              <li>Tailwind-Css, Sass, Style-components 등 CSS Preprocessor를 학습하였습니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox small>JavaScript</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>Jquery 사용에 능숙 하며, Jquery 없이도 구현하고자 하는 비지니스 로직 구현이 가능합니다.</li>
              <li>ES2015 이후 문법 또한 익숙해 지도록 학습 중에 있습니다.</li>
              <li>최적화에 대한 이슈에 관점을 두고 코딩하려고 노력합니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox small>React</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>React Hook을 활용한 함수형 컴포넌트를 작성할 수 있도록 학습하였습니다.</li>
              <li>React.memo 와 useCallback 에 대한 이해와 상황에 맞는 사용을 할 수 있도록 학습 하였습니다.</li>
              <li>redux-thunk, redux-saga를 사용한 비동기 처리 코드 작성 방식을 학습하였습니다.</li>
              <li>TypeScript를 적용한 React 코드를 작성하며 React를 학습하였습니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox small>Rescript</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>ReScript의 강력한 타입 시스템을 통해, 코드 안정성을 높이며 복잡한 데이터 구조를 모델링하는 방법을 배웠습니다.</li>
              <li>패턴 매칭, 순수 함수 등의 핵심 개념을 통해 함수형 프로그래밍의 깊이 있는 접근법을 익혔습니다.</li>
              <li>JavaScript 라이브러리와의 상호 작용을 위한 바인딩 기술을 활용, 효율적으로 외부 생태계와 통합하는 능력을 배웠습니다.</li>
              <li>효율적인 JavaScript 코드 작성 방법과 성능 최적화 전략에 대한 인식과 기술을 배웠습니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox>Back-End<span className={"--pointColor"}>.</span></ResumeSubTitleBox>
            <ResumeSubTitleBox small>Java</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>Spring Framework를 적용한 MVC 패턴 Back-end 코드 작성에 익숙합니다.</li>
              <li>RestAPI 설계 및 코드작성 경험이 있습니다.</li>
              <li>Spring Boot를 활용한 마이크로서비스 구조의 프로젝트 경험이 있습니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox small>RDB</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>원하는데이터요건에맞는SQL작성에익숙합니다.</li>
              <li>효율적인 관계형데이터베이스 테이블 설계가 가능합니다.</li>
              <li>SQL 최적화에 대한 이해와 작성이 가능합니다.</li>
            </ResumePointList>
            <ResumeSubTitleBox small>GraphQL</ResumeSubTitleBox>
            <ResumePointList tab>
              <li>필수 데이터만을 요청하여 네트워크 사용의 최적화 방법을 학습하였습니다.</li>
              <li> 단일 엔드포인트를 활용한 복잡한 API 관리 기법을 학습하였습니다.</li>
              <li> 타입 시스템을 이용한 API 스키마 정의 및 자동 문서화 기능에 대해 학습하였습니다.</li>
              <li> 다양한 에러 상황에 대응하는 유연한 처리 방안을 학습하였습니다.</li>
            </ResumePointList>

            <ResumeSubTitleBox main><span className={"--pointColor"}>W</span>ork Experience</ResumeSubTitleBox>
            <ResumeDivider/>

            <ResumeExper>

              <div className={"___box"}>
                <div className={"___lbox"}>
                  <h2>그린랩스</h2>
                  <h5>Front-End Developer<br/>2021. 06 – 2023. 02</h5>
                </div>
                <div>
                  <h2>FarmMornning 하이브리드 앱 기능개선 및 유지보수</h2>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>농민을 위한 대량판매, 직거래, 커뮤니티, 채팅, 보조금, 병해충 등의 기능 서비스를 제공하는 플랫폼 팜모닝의 기능 개선 및 유지보수 업무를 진행하였습니다. </p>
                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>
                  <ResumePointList tab>
                    <li>대량판매 기능 개발</li>
                    <li>커뮤니티 내 채팅 기능 개발</li>
                    <li>커뮤니티 기능 개선</li>
                    <li>보조금 기능 개선</li>
                    <li>팜모닝 일본 버전 팜나비 앱 개발</li>
                    <li>팜모닝 글로벌 버전 파미 앱 개발</li>
                  </ResumePointList>
                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>React, Rescript, GraphQL</div>
                    </div>
                  </ResumeExperList>
                </div>
              </div>
              <ResumeDivider/>

              <div className={"___box"}>
                <div className={"___lbox"}>
                  <h2>그린랩스</h2>
                  <h5>Full Stack Developer<br/>2020. 10 – 2021. 01</h5>
                </div>
                <div>
                  <h2>스마트팜 FarmMornning 기능개선 및 유지보수</h2>
                  <h5>2020. 10 – 2021. 01</h5>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>그린랩스 IoT 팀 소프트웨어 파트소속으로 3개월간 스마트팜 각 농가에 배포되는 소프트웨어에 대한 기능 개선 및 유지보수 업무를 진행하였습니다.
                    FarmMornning 서비스는 스마트팜에 설치된 IoT 센서를 통해 농가에서 측정가능한 정보수집하고 원격으로 농장 모니터링 및 제어 할 수 있는 기능을 제공하는 서비스 입니다. </p>
                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>
                  <ResumePointList tab>
                    <li>기존 서비스 코드의 불필요코드 제거 및 모듈화, webpack 번들링 개선 등 프로젝트 최적화 작업</li>
                    <li>프로젝트의 효율적인 데이터 제공을 위한 DB 구조 및 테이블 재설계</li>
                    <li>스마트팜 내 CCTV 리소스 감소를 위한 최적화 작업</li>
                    <li>농가 환경 및 제어정보 빅데이트 수집을 위한 API 설계 및 개발</li>
                  </ResumePointList>
                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>React</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Back</div>
                      <div>Node(Koa)</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>DB</div>
                      <div>MySql</div>
                    </div>
                  </ResumeExperList>
                </div>
              </div>
              <ResumeDivider/>

              <div className={"___box"}>
                <div className={"___lbox"}>
                  <h2>아이시프트</h2>
                  <h5>Full Stack Developer<br/>2015.03 ~ 2020.03</h5>
                </div>
                <div>
                  <h2>아산병원 생명연구원 통합연구지원 시스템</h2>
                  <h5>2019. 01 – 2020. 01</h5>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>서울 아산병원 소속 생명과학연구원 내부 통합연구포털 신규 개발에 1년 동안 참여하였습니다. SK C&C와 함께 총 8개의 SI 업체가 참여한 프로젝트로 통합포털메인,연구기획 파트의 개발을 맡아 세부 메뉴 개발을 진행하였습니다.</p>
                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>
                  <ResumePointList tab>
                    <li>위원회/회의관리 시스템 개발</li>
                    <li>프로세스 관리 시스템 개발</li>
                    <li>인력관리 시스템 개발</li>
                    <li>발전계획 및 예산관리 시스템 개발</li>
                  </ResumePointList>
                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>Nexacro17, Jquery, Javascript</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Back</div>
                      <div>Java Spring Framework (Spring Boot)</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>DB</div>
                      <div>Oracle 12c</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Server</div>
                      <div>Apache2, Jboss EAP 7</div>
                    </div>
                  </ResumeExperList>
                  <ResumeDivider/>

                  <h2>아모레 퍼시픽 기술연구원 내부 업무포털</h2>
                  <h5>2016. 05 – 2018. 12</h5>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>아모레 퍼시픽 용인 기술연구원 내부 업무포털 티움넷 관련 개발 및 유지보수 업무를 약 3년간 진행하였습니다.
                    화장품 연구개발을 위한 실험노트 및 해외 허가지원 업무 시스템, ODM 사 제품 등록 및 연관 테스트, 수출 프로세스 시스템 , 업무포털 내 커뮤니티 시스템 등을 개발 하였습니다.</p>

                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>

                  <h3>아모레퍼시픽 기술연구원 통합포털 티움넷 허가지원</h3>
                  <h5>2016 . 05 – 2016. 08</h5>
                  <ResumePointList tab>
                    <li>신규 개발제품 및 해외수출 제품 허가지원 프로세스 개발</li>
                    <li>식약청 API연동</li>
                  </ResumePointList>

                  <h3>아모레퍼시픽 기술연구원 통합포털 티움넷 중국 ODM TDD 개발</h3>
                  <h5>2017. 02 – 2017. 06</h5>
                  <ResumePointList tab>
                    <li>아모레퍼시픽중국지사ODMTDD제품등록프로세스개발</li>
                  </ResumePointList>

                  <h3>아모레퍼시픽 기술연구원 통합포털 티움넷 ODM TDD 개발</h3>
                  <h5>2017 07 – 2017. 12</h5>
                  <ResumePointList tab>
                    <li>국내외부사업자용ODM제품등록및사업자정보관리웹제작</li>
                  </ResumePointList>

                  <h3>아모레퍼시픽 기술연구원 통합포털 티움넷 커뮤니티 지식통 개발</h3>
                  <h5>2018. 01 – 2018. 03</h5>
                  <ResumePointList tab>
                    <li>업무포털내커뮤니티기능개발</li>
                    <li>사진,영상공유,팔로우,해시태그기능개발</li>
                  </ResumePointList>

                  <h3>아모레퍼시픽 기술연구원 통합포털 티움넷 유지보수</h3>
                  <h5>2018. 04 – 2018. 12</h5>

                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>Jquery, Javascript, JSP</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Back</div>
                      <div>Java Spring Framework</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>DB</div>
                      <div>Oracle 11</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Server</div>
                      <div>Tomcat 7</div>
                    </div>
                  </ResumeExperList>
                  <ResumeDivider/>

                  <h2>아모레 퍼시픽 쇼핑몰 Aritaum</h2>
                  <h5>2015. 03 – 2016. 04</h5>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>아모레 퍼시픽 쇼핑몰 프로젝트로 고도화를 시작으로 전체 쇼핑몰 리뉴얼, 글로벌 역직구 쇼핑몰 개발까지 6~7명의 인원으로 약 1년 4개월간 쇼핑몰 내부 포인트 관리 기능, 회원 마이페이지, 오프라인 POS 정보 연동 인터페이스, 상품리스트, 상품상세, 주문/반품/환불 Back-end 로직 처리, 결재 시스템 연동, 장바구니 시스템 등 쇼핑몰 관련 전반적인 개발 로직을 경험하였습니다.</p>

                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>

                  <h3>아리따움 고도화</h3>
                  <h5>2015. 03 – 2015. 05</h5>
                  <ResumePointList tab>
                    <li>마이파우치 (상품 구매 포인트) 누적, 소비, 선물 기능 구현</li>
                    <li>마이페이지 기능 구현 (회원정보수정, 주소지관리, 페이스북연동 등)</li>
                  </ResumePointList>

                  <h3>아리따움 쇼핑몰 리뉴얼</h3>
                  <h5>2015. 06 – 2015. 12</h5>
                  <ResumePointList tab>
                    <li>상품리스트,상세기능구현</li>
                    <li>주문,반품,환불및결재시스템구축(이니페이)</li>
                    <li>오프라인 POS 연동 인터페이스</li>
                  </ResumePointList>

                  <h3>아리따움 글로벌 역직구 쇼핑몰</h3>
                  <h5>2016. 01 – 2016. 04</h5>
                  <ResumePointList tab>
                    <li>상품리스트,상세기능구현</li>
                    <li>장바구니 기능 구현</li>
                  </ResumePointList>

                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>Jquery, Javascript, JSP</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Back</div>
                      <div>Java Spring Framework</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>DB</div>
                      <div>Oracle 11</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Server</div>
                      <div>Tomcat 7</div>
                    </div>
                  </ResumeExperList>
                </div>
              </div>
              <ResumeDivider/>
              <div className={"___box"}>
                <div className={"___lbox"}>
                  <h2>단국대 연구소</h2>
                  <h5>Full Stack Developer<br/>2014. 09 – 2015. 02</h5>
                </div>
                <div>
                  <h2>옥상녹화 시뮬레이션 웹 GreenI</h2>
                  <h5>2014. 09 – 2015. 02</h5>
                  <h3><span className={"--pointColor"}>#</span> Description</h3>
                  <p>단국대 건축과학정보 연구실에서 농촌진흥청과 함께 진행하는 옥상녹화 성능 테스트 웹 개발 프로젝트로 1인 개발 하였습니다.
                    옥상녹화에 대한 전문지식이 없더라도 건물 옥상의 녹화 시공진행 하였을 경우 녹화에 사용된 식생과 토양의 특징에 따라 발생되는 건물의 에너지성능을 미리 확인하고 비교, 평가할 수 있는 서비스 제공을 목표로 진행된 프로젝트입니다.</p>
                  <h3><span className={"--pointColor"}>#</span> What did i do</h3>
                  <ResumePointList tab>
                    <li>EnergePlus-V8 프로그램 batch파일 작성하여 실행/결과 정보 연동</li>
                    <li>Python Django Framework 활용한 Front-end 페이지 작업</li>
                    <li>실험결과분석세부정보전달을위한다양한통계그래프<br/>
                      Javascript Plugin 활용</li>
                  </ResumePointList>
                  <h3><span className={"--pointColor"}>#</span> Tech Stack</h3>
                  <ResumeExperList>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Front</div>
                      <div>Jquery, Javascript, JSP</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Back</div>
                      <div>Python Django Framework</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>DB</div>
                      <div>Oracle 11</div>
                    </div>
                    <div className={"___row"}>
                      <div className={"___rowTitle"}>Server</div>
                      <div>Tomcat 7</div>
                    </div>
                  </ResumeExperList>
                </div>
              </div>
            </ResumeExper>
          </article>
        </ResumeWrap>
    );
};

export default ResumeComp;

const ResumeExperList = styled.div`
    .___row{
      display: flex;
      justify-content: left;
      align-items: center;
      
      .___rowTitle {
         position: relative;
         min-width: 100px;
         margin-right: 20px;
         text-align: left;
      }
      
      .___rowTitle::after {
        position:absolute;
        content: ":";
        font-size: 1.2rem;
        font-weight: bold;
        right: 0;
        color: ${pointColor}
      }
      
    }
`;

const ResumeExper = styled.div`
  
  h2, h3, h4, h5 {
    font-family: Ubuntu,Noto Sans KR,sans-serif;
  }
  
  p{
    font-size: 1rem;
    text-overflow: ellipsis;
  }
  
  .___box{
    display: flex;
    justify-content: space-between;
    
    h5 {
      font-weight: normal;
    }
    
    .___lbox {
      min-width : 300px;
    }
  }
  
  @media only screen and (max-width: 992px) {
    .___box{
        display: block;
    }
  }
  
`;

const ResumeSubTitleBox = styled.div<ResumeSubTitleBoxProps>`
  margin: 35px 0;
  margin-top : ${(props) => props.main ? "70px":"0"};
  font-size: ${(props) => props.small ? "1.5rem" : "2rem"};
`;

const ResumeIntroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .___leftbox {
    
    min-width: 200px;
    padding-top: 20px;
    margin-right: 50px;
    
    .___imgbox {
      display: inline-block;
      padding: 8px;
      background: linear-gradient(130deg, ${pointColor}, white);
      
      border-radius: 50%;
      background-size: 200% 200%;
      animation: animated-gradient 2s linear infinite;
      
      @keyframes animated-gradient{
        25% {
          background-position: left bottom;
        }
        50% {
          background-position: right bottom;
        }
        75% {
          background-position: right top;
        }
        100% {
          background-position: left top;
        }
      }
      
      img {
        display: block;
        width: 200px;
        border-radius: 50%;
        margin: 0;
      }
    }
  
  
  }
  
  
`;

const ResumeTextDefault = styled.p`
  font-size: 1.1rem;
  margin: 35px 0;
`;

const ResumePointList = styled.ul<ResumePointListProps>`
  position: relative;
  margin:20px 0 40px ${(props) => props.tab ? "40px": "20px"};
  font-size: ${(props) => props.tab ? "1rem": "1.2rem"};;
  
  & li::before {
    content:"•";
    position: absolute;
    left: -20px;
    font-size: 2rem;
    color: ${pointColor}
  }
`;

const ResumeDivider = styled.div`
  margin: 30px 0;
  border-top: 1px solid rgba(0,0,0,0.08);
  width: 100%;
  height: 1px;
`;

const ResumeWrap = styled.div`
    margin: 200px auto;

    .--pointColor{
       color:${pointColor};
    }
    
    article {
      padding: 70px;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    }
`;

const ResumeTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .___title {
      width: 700px;
      padding: 20px 0;
      font-family: "Noto Sans KR";
      font-size: 3rem;
      font-weight: bold;
      line-height: 4rem;
    }

    .___info {
      width: 300px;
      border-left: 1px solid rgba(0,0,0,0.08);
      padding-left: 15px;
      
    }
`;
