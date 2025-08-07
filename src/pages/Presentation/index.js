import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Presentation({ setPageIndex }) {
  return (
    <div style={{ width: '100%', maxWidth: '480px', minHeight: '100vh', backgroundColor: 'white', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: '20px' }}>
      <br /><br />
      지금 이 순간을<br />
      AI 포토카드로 남겨보세요!

      <br /><br />
      사진을 찍으면<br />
      캐릭터가 말을 걸어요!<br /><br />
      </p>

      <div style={{ border: '1px solid black', width: '75%', aspectRatio: '10 / 12' }} />

      <p style={{ fontSize: '20px' }}>
      <br />
      기분 좋은 한마디와 함께<br />
      나만의 AI 포토카드가 완성됩니다.

      <br /><br /><br />
      10초면 생성하는<br />
      나만의 캐릭터 AI 포토카드<br />
      사진도 찍고, 선물도 받고!!<br /><br />     
      </p>

      <div style={{ border: '1px solid black', width: '50%', aspectRatio: '1' }} />

      <p style={{ fontSize: '18px' }}>
      <br /><br /><br />
      본 서비스는<br />
      <strong>2025 AI 리빙랩 프로젝트</strong>의<br />
      일환으로 운영하는,<br />
      <strong>도시 콘텐츠 프로젝트</strong>입니다.<br /><br />
      <strong>테스트 운영</strong>을 통해 얻은 결과로<br />
      향후 개선된 AI 콘텐츠를<br />
      운영하고자 함에 목적이 있습니다.<br /><br />
      <strong>본 사업 기간 이후 수집한 정보는 파기되며,<br />
      테스트 운영 목적 이외에 활용하지 않습니다.</strong><br /><br /><br />
      사업기간: 25.07.01 ~ 25.11.30<br />
      </p>

      <p style={{ fontSize: '20px' }}>
      운영사: 주식회사 아트뮤<br />
      지원: 천안문화도시<br />
      도움: 천안시<br /><br />
      </p>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <img src="./logo1.jpg" style={{ width: '20%' }} />
        <img src="./logo2.png" style={{ width: '18%' }} />
        <img src="./logo3.png" style={{ width: '25%' }} />
      </div>

      <p style={{ fontSize: '20px' }}>
      <br />문의: 041-522-2009 (주식회사 아트뮤)<br /><br /><br /><br /><br /><br /><br /><br />
      </p>

            <div style={{
                position: 'fixed',
                bottom: '8%',
    left: '50%',
    transform: 'translateX(-50%)',
                width: '280px',
                backgroundColor: '#000',
                color: '#fff',
                textAlign: 'center',
                padding: '1rem',
                zIndex: 1000,
                cursor: 'pointer'
            }} onClick={() => setPageIndex(1)}>
                AI 포토카드 만들기
            </div>
    </div>
  );
}

function CameraScreen({ setPageIndex }) {
    const [showButtons, setShowButtons] = useState(true);
    const [characterType, setCharacterType] = useState(0);
    const [countdownText, setCountdownText] = useState('');
    const [randomMessage, setRandomMessage] = useState('');
    const countdownRef = useRef(null);

    const characterImages = {
        1: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
        2: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
        3: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    };

    const messages = ['멋져요!', '잘했어요!', '최고!', '굿!', '환상적이에요!'];

    const cameraHeight = characterType === 0 ? '100%' : '60%';

    const startCountdown = () => {
        if (countdownRef.current) return;

        setCountdownText('3');
        setRandomMessage('');
        let step = 3;

        countdownRef.current = setInterval(() => {
            step -= 1;

            if (step > 0) {
                setCountdownText(String(step));
            } else if (step === 0) {
                setCountdownText('생성중');
            } else if (step === -3) {
                const randIndex = Math.floor(Math.random() * messages.length);
                setRandomMessage(messages[randIndex]);
                setCountdownText('');
                clearInterval(countdownRef.current);
                countdownRef.current = null;
            }
        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (countdownRef.current) clearInterval(countdownRef.current);
        };
    }, []);

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '480px',
                margin: 'auto',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#fff',
            }}
        >
            {/* 카메라 화면 */}
            <div
                style={{
                    height: cameraHeight,
                    backgroundColor: '#444',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '18px',
                    transition: 'height 0.3s ease',
                    flexDirection: 'column',
                }}
            >
                <div>카메라 화면</div>

                {/* 카운트다운 */}
                {countdownText && (
                    <div
                        style={{
                            position: 'absolute',
                            top: '30px',
                            fontSize: '32px',
                            fontWeight: 'bold',
                            color: 'white',
                            textShadow: '0 0 6px black',
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        {countdownText}
                    </div>
                )}

                {/* 문구 */}
                {randomMessage && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            fontSize: '20px',
                            fontWeight: '600',
                            color: '#fff',
                            textShadow: '0 0 5px black',
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        {randomMessage}
                    </div>
                )}

                {/* 카메라 전환 아이콘 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        width: '32px',
                        height: '32px',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                    }}
                    onClick={() => {
                        // TODO: 카메라 전환 로직
                    }}
                >
                    🔄
                </div>
            </div>

            {/* 캐릭터 이미지 표시 */}
            {characterType !== 0 && (
                <div
                    style={{
                        height: '25%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f0f0f0',
                    }}
                >
                    <img
                        src={characterImages[characterType]}
                        alt="캐릭터"
                        style={{ maxHeight: '100%', maxWidth: '80%' }}
                    />
                </div>
            )}

            {/* 버튼 영역 */}
{showButtons ? (
  randomMessage ? (
    // 문구 있을 때 — 다시 찍기 / 이벤트 참여 버튼만 표시
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '180px',
        height: '27vh',
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <button
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#eee',
          border: '1px solid #ccc',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setRandomMessage('');
          setCountdownText('');
          setCharacterType(0);
        }}
      >
        다시 찍기
      </button>
      <button
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={() => setPageIndex((prev) => prev + 1)}
      >
        이벤트 참여
      </button>
    </div>
  ) : (
    // 문구 없을 때 — 기존 버튼들
    <div
      style={{
        backgroundColor: '#fff',
        minHeight: '180px',
        height: '27vh',
        padding: '12px 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '100px',
      }}
    >
      <div style={{ fontSize: '24px' }}>🖼️</div>

      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '2px solid black',
          backgroundColor: 'white',
          cursor: characterType === 0 ? 'default' : 'pointer',
          pointerEvents: characterType === 0 ? 'none' : 'auto',
        }}
        onClick={startCountdown}
      />

      <div
        style={{
          fontSize: '30px',
          cursor: 'pointer',
          animation: characterType === 0 ? 'floatScale 2s ease-in-out infinite' : 'none',
          display: 'inline-block',
        }}
        onClick={() => setShowButtons(false)}
      >
        😊
      </div>
    </div>
  )
) : (
  // 캐릭터 선택 화면 (기존 그대로)
  <div
    style={{
      backgroundColor: '#fff',
      padding: '12px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      minHeight: '180px',
      height: '27vh',
      justifyContent: 'center',
    }}
  >
    <button
      style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'transparent' }}
      onClick={() => {
        setShowButtons(true);
        setCharacterType(1);
      }}
    >
      천안프렌즈
    </button>
    <button
      style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'transparent' }}
      onClick={() => {
        setShowButtons(true);
        setCharacterType(2);
      }}
    >
      돌모랭이
    </button>
    <button
      style={{ width: '200px', padding: '10px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'transparent' }}
      onClick={() => {
        setShowButtons(true);
        setCharacterType(3);
      }}
    >
      랜덤
    </button>
  </div>
)}

            {/* 애니메이션 keyframes 삽입 */}
            <style>
                {`
                    @keyframes floatScale {
                        0% { transform: translateY(-5px) scale(1); }
                        50% { transform: translateY(5px) scale(1.2); }
                        100% { transform: translateY(-5px) scale(1); }
                    }
                `}
            </style>
        </div>
    );
}

const PhotoCardEventForm = ({ setPageIndex }) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeSMS, setAgreeSMS] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const [verificationSent, setVerificationSent] = useState(false);
  const [inputCode, setInputCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSendVerification = () => {
    if (!contact) return alert("연락처를 입력해주세요.");
    alert("인증번호가 전송되었습니다. (1111)");
    setVerificationSent(true);
  };

  const handleVerifyCode = () => {
    if (inputCode === "1111") {
      setIsVerified(true);
      alert("인증이 완료되었습니다.");
    } else {
      alert("인증번호가 올바르지 않습니다.");
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!agreePrivacy) {
    alert("개인정보처리방침에 동의해주세요.");
    return;
  }

  if (!agreeSMS) {
    alert("SMS 수신에 동의해주세요.");
    return;
  }

  if (!isVerified) {
    alert("연락처 인증을 완료해주세요.");
    return;
  }

  setShowCompleteModal(true);
};

  const closeModals = () => {
    setShowCompleteModal(false);
  };

  // ==== 스타일 ====
  const container = {
    width: "100%",
    maxWidth: "480px",
    margin: "auto",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fff",
  };

  const contentBox = {
    width: "85%",
    margin: "0 auto",
  };

  const label = {
    fontWeight: "bold",
    fontSize: "16px",
    width: "80px",
    marginRight: "10px",
  };

  const input = {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  const row = {
    display: "flex",
    alignItems: "center",
    marginBottom: "14px",
  };

  const button = {
    padding: "10px",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const fullWidthButton = {
    ...button,
    width: "100%",
    marginTop: "20px",
  };

  const smallButton = {
    ...button,
    width: "48%",
  };

  const checkboxContainer = {
    marginTop: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalBox = {
    backgroundColor: "#fff",
    padding: "30px 20px",
    borderRadius: "8px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  };

  const twoButtonWrapper = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "24px",
  };

  return (
    <div style={container}>
      <div style={contentBox}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>
          포토카드 만들기 완료!
        </h2>
        <p style={{ fontSize: "16px", textAlign: "center", margin: "16px 0" }}>
          이제 굿즈 선물 이벤트에 응모해보세요 :)<br />
          이름과 연락처만 입력하면 참여 완료!<br />
          당첨자는 개별 연락드려요.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={row}>
            <label style={label}>이름</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={input}
              placeholder="이름을 입력하세요"
            />
          </div>

          <div style={row}>
            <label style={label}>연락처</label>
            <div style={{ display: "flex", flex: 1, gap: "8px" }}>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={input}
                placeholder="010-1234-5678"
              />
              <button type="button" onClick={handleSendVerification} style={button}>
                인증 요청
              </button>
            </div>
          </div>

          {verificationSent && (
            <div style={{ ...row, marginTop: "8px", gap: "8px" }}>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                style={input}
                placeholder="인증번호 입력"
              />
              <button type="button" onClick={handleVerifyCode} style={button}>
                인증 확인
              </button>
            </div>
          )}

          <div style={checkboxContainer}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={() => setAgreePrivacy(!agreePrivacy)}
                style={{ marginRight: "8px" }}
              />
              개인정보처리방침 동의
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={agreeSMS}
                onChange={() => setAgreeSMS(!agreeSMS)}
                style={{ marginRight: "8px" }}
              />
              SMS 수신 동의
            </label>
          </div>

          <button type="submit" style={fullWidthButton}>
            이벤트 응모하기
          </button>
        </form>
      </div>

      {showCompleteModal && (
        <div style={modalOverlay}>
          <div style={modalBox}>
            <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px" }}>
              이벤트 응모가 완료되었습니다!
            </p>
            <div style={twoButtonWrapper}>
              <button onClick={() => alert("공유 기능은 추후 구현")} style={smallButton}>
                친구에게<br />공유하기
              </button>
              <button
                onClick={() => {
                  closeModals();
                  setPageIndex?.(1);
                }}
                style={smallButton}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


function App() {
    const [pageIndex, setPageIndex] = useState(0);

    const renderPage = () => {
        switch (pageIndex) {
            case 0:
                return <Presentation setPageIndex={setPageIndex} />;
            case 1:
                return <CameraScreen setPageIndex={setPageIndex} />;
            case 2:
                return <PhotoCardEventForm setPageIndex={setPageIndex} />;
            default:
                return <Presentation setPageIndex={setPageIndex} />;
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            {renderPage()}
        </div>
    );
}

export default App;

