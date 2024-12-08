# EKO Space
EKO Space to projekt który ma na celu szerzenie świadomości na temat zanieczyszczeń powodowanych przez ludzkość w przestrzeni kosmicznej. Projekt składa się z 2 częsci: backendu generującego wizualizacje zanieczyszczeń oraz frontendu, który prezentuje te wizualizacje w przystępnym formacie.
## Szybki start:
Aby uruchomić aplikację lokalnie najpierw należy pobrać repozytorium:
```bash
git clone https://github.com/agentolek/bhlHackathon
```
### Backend
Backend jest napisany w frameworku Flask, a do generowania wizualizacji używa biblioteki Folium. Aby go uruchomić należy najpierw pobrać odpowiednie zależności:
```bash
pip install flask folium
```
> :warning: Uwaga! Zalecane jest korzystanie z narzędzia tworzącego wirtualne środowsko, jak np. `venv`.

Po pobraniu zależności wystarczy uruchomić aplikacje z korzenia repozytorium, przy pomocy polecenia:
```bash
python3 backend/run.py
```
### Frontend
Frontend jest napisany w frameworku Vite, przy użyciu biblioteki React.js oraz języka TypeScript. Jako package managera użyliśmy narzędzia yarn, a więc najpierw pobieramy yarna.
```bash
npm install -g yarn
```
Następnie przechodzimy do folderu zawierającego frontend
```bash
cd frontend/frontend
```
Oraz pobieramy wszystkie zależności:
```bash
yarn
```
Aby uruchomić aplikację w środowisku developerskim używamy polecenia:
```bash
yarn dev
```
